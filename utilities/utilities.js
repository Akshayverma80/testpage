import moment from "moment";
const config = {
  bucketName: process.env.REACT_APP_BUCKET_NAME,
  region: process.env.REACT_APP_REGION,
  accessKeyId: process.env.REACT_APP_ACCESS_ID,
  secretAccessKey: process.env.REACT_APP_ACCESS_KEY,
};

function alphaOnly(event) {
  if (!/^[a-z A-Z]*$/.test(event.key)) {
    // alert("Please enter alphabet only");
    event.preventDefault();
  }
}

function alphaNumOnly(event) {
  if (/[^0-9a-zA-Z]/.test(event.key)) {
    event.preventDefault();
  }
}

function objectHasKey(obj, key) {
  if (
    obj !== undefined &&
    obj !== null &&
    Object.keys(obj).length > 0 &&
    obj.hasOwnProperty(key)
  ) {
    return true;
  }
  return false;
}

function objectHasKeys(obj) {
  if (obj !== undefined && obj !== null && Object.keys(obj).length > 0) {
    return true;
  }
  return false;
}

function arrayNotNull(array) {
  if (
    array !== undefined &&
    array !== null &&
    Array.isArray(array) &&
    array.length > 0
  ) {
    return true;
  }
  return false;
}

function notNull(data) {
  if (data !== undefined && data !== null && data !== "") {
    return true;
  }
  return false;
}

function defaultDate(date) {
  return moment(date).format("DD/MM/YYYY");
}

function defaultDateTime(date) {
  return moment(date).format("DD/MM/YYYY: hh:mm A");
}

async function uploadImage(image) {
  let uploadedUrl;
  try {
    uploadedUrl = await S3FileUpload.uploadFile(image, config);
  } catch (error) {
    console.log(error);
  }
  return uploadedUrl;
}

function globalSearch(dataList, searchItem) {
  let filterData;
  if (dataList && searchItem !== "") {
    let filteredData = dataList.filter((data) => {
      let retData;
      if (data.name) {
        if (data.name.toLowerCase().includes(searchItem.toLowerCase())) {
          retData = data;
        }
      } else if (data.recipientData) {
        if (
          data.recipientData.name
            .toLowerCase()
            .includes(searchItem.toLowerCase())
        ) {
          retData = data;
        }
      }
      return retData;
    });
    filterData = filteredData;
  } else {
    filterData = null;
  }
  return filterData;
}
export {
  alphaNumOnly,
  alphaOnly,
  objectHasKey,
  objectHasKeys,
  arrayNotNull,
  notNull,
  defaultDate,
  defaultDateTime,
  globalSearch,
  uploadImage,
};
