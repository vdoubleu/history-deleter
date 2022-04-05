import formidable from 'formidable';
import FormData from 'form-data';

export const config = {
  api: {
    bodyParser: false,
  },
};

export default async function handler(req, res) {
  const form = new formidable.IncomingForm();
  form.uploadDir = "./";
  form.keepExtensions = true;
  const formFields = await new Promise((reject, resolve) => {
    form.parse(req, (err, fields, files) => {
      if (err) {
        reject(err);
        return;
      } else {
        resolve({"fields": fields, "files": files});
      }
    });
  });


  const formData = new FormData();
  formData.append('file', formFields.files.file.path);
  console.log(formFields.files);
  const fileUploadRes = await fetch('https://anonfiles.io/api/upload', {
    method: 'POST',
    body: formData,
  });
  const fileUploadResJson = await fileUploadRes.json();
  // send the anonfiles url to the client
  res.json({
    url: fileUploadResJson.data.url.full
  });

  // const formdata = new FormData();
  // formdata.append('file', );
  // const fileUploadRes = await fetch("https://api.anonfiles.com/upload", {
  //   method: "POST",
  //   body: formdata
  // });
  // const fileUploadResJson = await fileUploadRes.json();

  // res.json({
  //   url: fileUploadResJson.data.url.full
  // });
}
