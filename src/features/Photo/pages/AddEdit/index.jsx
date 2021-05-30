import photosApi from 'api/photosApi';
import Banner from 'components/Banner';
import PhotoForm from 'features/Photo/components/PhotoForm';
import { addPhoto, updatePhoto } from 'features/Photo/PhotoSlice';
import useFullPageLoader from 'hook/useFullPadeLoader';
import React from 'react';
import { useAlert } from 'react-alert';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router';
import { randomNumber } from 'utils/randomNumber';
import './styles.scss';

AddEditPage.propTypes = {};

function AddEditPage() {
  const dispatch = useDispatch();
  const history = useHistory();
  const {photoId} = useParams(); 
  const alert = useAlert();
  const [ loader, showLoader, hideLoader ] = useFullPageLoader();
  
  const photoUpdate = useSelector(state => {
    return state.photos.find(photo => photo.id == photoId);
  });
  const isAddMode = !photoId;
  let initialState = isAddMode ? 
  {
    title: "",
    categoryId: null,
    photo:"",
    like:false
  }
  : photoUpdate;

  const handleSubmit = (values) => {
    if (isAddMode) {
      showLoader();
      // Create new Photo
      let newValue = {
        ...values,
        id : randomNumber(0,9999),
      }
      photosApi.postPhoto(newValue)
        .then((resolve) => {
          const addPhotoAction = addPhoto(resolve);
          dispatch(addPhotoAction); 
          hideLoader();
          alert.success('Add Photo Success !!! ');
        },(error) => {
          console.error(error);
          hideLoader();
          alert.error('Add Photo Failed !!! ');
        });
    } else {
      showLoader();
      // Update special Photo
      photosApi.putPhoto(values)
      .then((resolve) => {
        const updatePhotoAction = updatePhoto(resolve);
        dispatch(updatePhotoAction);
        hideLoader();
        alert.success('Update Photo Success !!! ');
      },(error) => {
        console.error(error);
        hideLoader();
        alert.error('Update Photo Failed !!! ');
      }
      
      )
    }
  }
  return (
    <div className="photo-edit">
      <Banner title="Pick your amazing photo 😎" />
      <div className="photo-edit__form">
        <PhotoForm initialState={initialState} onSubmit={handleSubmit} isAddMode={isAddMode}/>
      </div>
      {loader}
    </div>
  );
}

export default AddEditPage;