# create build folder
npm run build

# go to build folder 
cd build

# clone index.html to 200.html -> rediect to ixdex page whenever get error route
cp index.html 200.html

# start deploy vis Surge
# the command means deploy current folder to domain hungfe-photo-app.surge.sh
surge . hungfe-photo-app.surge.sh