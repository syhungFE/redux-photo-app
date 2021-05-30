import React, { useState,useEffect } from 'react';
import Banner from '../../../../components/Banner';
import Images from '../../../../constants/images';
import { useHistory } from 'react-router-dom';
import { Container } from 'reactstrap';
import { useDispatch, useSelector } from 'react-redux';
import PhotoList from 'features/Photo/components/PhotoList';
import PhotoGridList from 'features/Photo/components/PhotoGridList';
import { initPhotos, removePhoto, updatePhoto } from 'features/Photo/PhotoSlice';
import photosApi from 'api/photosApi';
import { useAlert } from 'react-alert';
import useFullPageLoader from 'hook/useFullPadeLoader';
import PhotoFilter from 'features/Photo/components/PhotoFilter';
import PaginationCustom from 'components/Pagination/PaginationCustom';
import ModalCustom from 'components/Modal';
import './style.scss';
import PhotoLike from 'features/Photo/components/PhotoLike';

function MainPage() {
  const history = useHistory();
  const dispatch = useDispatch();
  const alert = useAlert();

  const [photos, setPhotos] = useState([]); 
  const [filter,setFilter] = useState({
    page: 1,
    limit: 10,
    categoryId: 0
  });
  const [pagination, setPagination] = useState({
    page: 1,
    limit: 10,
    totalRows: 1
  });

  const [ loader, showLoader, hideLoader ] = useFullPageLoader();

  useEffect(() => {
    try {
      photosApi.getAll()
        .then((response) => {
          const pagination = {
            page : 1,
            limit: 10,
            totalRows: response.length
          };
          setPagination(pagination);
          const photos = initPhotos(response);
          dispatch(photos);
        },(error) => {
          console.log(error);
        });
    } catch (error) {
      console.error(error);
    }
  }, []);

  useEffect(() => {
    showLoader()
    try {
      photosApi.getAll(filter)
        .then((response) => {
          setPhotos(response);
          hideLoader();
        },(error) => {
          console.log(error);
          hideLoader();
        });
    } catch (error) {
      console.error(error);
    }
}, [filter]); 

  const handlePhotoEditClick = (photo) => {
    const editPhotoUrl = `/photos/${photo.id}`;
    history.push(editPhotoUrl);
  }
  const handleRemoveClick = (photo) => {
    showLoader();
    try {
      photosApi.delPhoto(photo)
      .then((resolve) => {
        // create action 
        const removeAction = removePhoto(resolve.id);
        //dispatch action to remove photo
        dispatch(removeAction);
        hideLoader();
        alert.success('Delete Photo Success !!! ');
      },(error) => {
        console.log(error);
        hideLoader();
        alert.error('Delete Photo Failed!!! ');
      })
    } catch (error) {
      console.log(error);
    }
  }
  const handlePhotoLikeClick = (photo) => {
    try {
      photosApi.putPhoto(photo)
      .then((resolve) => {
        const likeAction = updatePhoto(resolve);
        dispatch(likeAction);
      },(error) => {
        console.log(error);
      })
    } catch (error) {
      console.log(error);
    }
  }
  const hangleFilterChange = (categoryId) => {
    setFilter((state) => {
        return {...state,categoryId};
    });
  }
  const handlePageChange = (newPage) => {
    setFilter({
        ...filter,
        page:newPage
    });
    setPagination({
        ...pagination,
        page:newPage
    });
  }
  return (
    <div className="photo-main">
      <Banner title="Your awesome photos 🎉" backgroundUrl={Images.PINK_BG} />
      <div className="action-bar d-flex justify-content-end">
        <ModalCustom
          className="guild-modal mt-3 mr-3"
          colorButton="info"
          modalTitle="Surprise You"
          modalContent="Yaaaa! You can Drag and Drop items to sorting by yourself."
          modalAction="Yes, I Understand"
        />
        <ModalCustom
          className="photo-like mt-3 mr-3"
          colorButton="primary"
          modalTitle="Photos You Liked"
          modalContent={<PhotoLike onDisLikeClick={handlePhotoLikeClick}/>}
          modalAction="Close"
        />
      </div>
      <PhotoFilter hangleFilterChange={hangleFilterChange}/>
      <Container className="text-center mt-5">
        <PhotoGridList
          photoList={photos}
          onPhotoEditClick={handlePhotoEditClick}
          onPhotoRemoveClick={handleRemoveClick}
          onPhotoLikeClick={handlePhotoLikeClick}
        />
        <PaginationCustom
          pagination={pagination}
          onPageChange={handlePageChange}
        />
      </Container>
      {loader}
    </div>
  );
}

export default MainPage;