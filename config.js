module.exports = {
  s3: {
    accessKeyId: process.env.ACCESS_KEY_ID, // TODO
    secretAccessKey: process.env.SECRET_ACCESS_KEY, // TODO
    endpoint: 's3.eu-west-1.amazonaws.com', // TODO
    bucket: 'esgi-cloud-exam-bucket-80286', // TODO
  },
  suffix: {
    small: '_small.jpg',
    full: '_full.jpg'
  }
};
