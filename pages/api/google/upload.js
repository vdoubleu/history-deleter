import formidable from 'formidable';
import FormData from 'form-data';
import fs from 'fs';

export const config = {
  api: {
    bodyParser: false,
  },
};

export default async function handler(req, res) {
  const formFields = await new Promise((resolve, reject) => {
    const form = new formidable.IncomingForm();
    form.parse(req, (err, fields, files) => {
      if (err) {
        reject(err);
      } else {
        resolve({"fields": fields, "files": files});
      }
    });
  });

  

  const formData = new FormData();
  formData.append('fileToUpload', fs.createReadStream(formFields.files.file.filepath));
  formData.append('reqtype', 'fileupload');
  formData.append('time', '1h');
  const fileUploadRes = await fetch('https://litterbox.catbox.moe/resources/internals/api.php', {
    method: 'POST',
    body: formData,
  });
  const fileUploadResJson = await fileUploadRes.text();
  console.log(fileUploadResJson);
  res.status(200).json({
    fileurl: fileUploadResJson,
  });
}
