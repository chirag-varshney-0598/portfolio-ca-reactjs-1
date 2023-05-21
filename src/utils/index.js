import { Contract } from "@ethersproject/contracts";
import * as XLSX from "xlsx";
import Web3 from "web3";
// import imageThumbnail from "image-thumbnail";
// const imageThumbnail = require("image-thumbnail");
export function sortAddress(add) {
  const sortAdd = `${add?.slice(0, 6)}...${add?.slice(add.length - 4)}`;
  return sortAdd;
}
export function sortAddress2(add) {
  const sortAdd = `${add?.slice(0, 15)}...${add?.slice(add.length - 2)}`;
  return sortAdd;
}
export function isValidYoutubeUrl(value) {
  const re =
    /^((?:https?:)?\/\/)?((?:www|m)\.)?((?:youtube\.com|youtu.be))(\/(?:[\w\-]+\?v=|embed\/|v\/)?)([\w\-]+)(\S+)?$/;
  return re.test(value);
}

export function URLTester(videoURL) {
  try {
    const isWatch = videoURL?.includes("watch?v=");
    if (isWatch) {
      const splittedURL = videoURL?.split("watch?v=");
      const newUrl = `${splittedURL[0]}embed/${splittedURL[1]}`;
      return newUrl;
    }
  } catch (error) {
    console.log(error);
  }
}

export function getSigner(library, account) {
  return library.getSigner(account).connectUnchecked();
}

export function getProviderOrSigner(library, account) {
  return account ? getSigner(library, account) : library;
}

export function getContract(address, ABI, library, account) {
  return new Contract(address, ABI, getProviderOrSigner(library, account));
}
export const calculateTimeLeft = (endDate) => {
  if (endDate) {
    let difference = +new Date(endDate) - +new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / ((1000 / 60) * 60 * 24)),
        hours: Math.floor((difference / ((1000 / 60) * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }
    return timeLeft;
  } else {
    return false;
  }
};
export const downloadExcel = (dataToPrint, sheetName) => {
  const workSheet = XLSX.utils.json_to_sheet(dataToPrint);
  const workBook = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(workBook, workSheet, sheetName);
  let buf = XLSX.write(workBook, { bookType: "xlsx", type: "buffer" });
  XLSX.write(workBook, { bookType: "xlsx", type: "binary" });
  XLSX.writeFile(workBook, `${sheetName}.xlsx`);
};

export const validateAccountAddress = async (account) => {
  const RPC_URL = "https://kovan.infura.io/v3/9aa3d95b3bc440fa88ea12eaa4456161";
  const httpProvider = new Web3.providers.HttpProvider(RPC_URL);
  const web3 = new Web3(httpProvider);
  try {
    const accountCheck = web3.utils.toChecksumAddress(account);
    if (accountCheck !== "") {
      return true;
    }
  } catch (error) {
    console.log(error);
    return false;
  }
};
export const getBase64 = (file, cb) => {
  let reader = new FileReader();
  reader.readAsDataURL(file);
  reader.onload = function () {
    cb(reader.result);
  };
  reader.onerror = function (err) {
    console.log("Error: ", err);
  };
};
export const resizeBase64Img = async (base64, newWidth, newHeight) => {
  return new Promise((resolve, reject) => {
    // const imageThumbnail = require("image-thumbnail");
    // const thumbnail = imageThumbnail(base64);
    // console.log("--- imageQuality --", thumbnail);
    var canvas = document.createElement("canvas");
    canvas.style.width = newWidth.toString() + "px";
    canvas.style.height = newHeight.toString() + "px";
    let context = canvas.getContext("2d");
    let img = document.createElement("img");
    img.src = base64;
    img.onload = function () {
      context.scale(newWidth / img.width, newHeight / img.height);
      context.drawImage(img, 0, 0);
      resolve(canvas.toDataURL());
    };
  });
};

export const resizeBase64Img2 = (base64, newWidth, newHeight) => {
  // return (
  var canvas = base64;
  var ctx = canvas.getContext("2d");
  // var cw=canvas.width;
  // var ch=canvas.height;
  var maxW = 324;
  var maxH = 324;

  // var input = document.getElementById('input');
  // var output = document.getElementById('file_output');
  // input.addEventListener('change', handleFiles);

  // function handleFiles(e) {
  var img = new Image();
  img.onload = function () {
    var iw = img.width;
    var ih = img.height;
    var scale = Math.min(maxW / iw, maxH / ih);
    var iwScaled = iw * scale;
    var ihScaled = ih * scale;
    canvas.width = iwScaled;
    canvas.height = ihScaled;
    ctx.drawImage(img, 0, 0, iwScaled, ihScaled);
    let output = canvas.toDataURL("image/jpeg", 0.5);
    console.log("--- imageQuality --", output);
  };
  img.src = base64;
  // }
  // )
};
