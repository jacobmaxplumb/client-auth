const admin = require('firebase-admin');

const seriveAccount = {
    "type": "service_account",
    "project_id": "my-project-4c3cf",
    "private_key_id": "392958d6af08d035e03dbf8be02b61311c98e5db",
    "private_key": "-----BEGIN PRIVATE KEY-----\nMIIEvgIBADANBgkqhkiG9w0BAQEFAASCBKgwggSkAgEAAoIBAQCrRSCxoVv2zY/T\nBMyunVCIphbnnPsKC9QkRXlo5Vnupa+R0agD6Dw/PxK9ESXuXALnrvYmizdbGDHm\nzUCttwKUTrmvWye2wX/gcp4ddIYpjj1VZt+0m224hOwLQBs4Fbe1Qxws9wLzNMNz\nxkSp8b6Hq4hvGJPU4/uciCh7Bjd5ApTvMQoWViLjyTEm8mm7lmPiYTinoA/30SPl\nmV8XsbYetqkotD3jK+CTHwgvVxwbFk04rOp5J4FmVcp2txsqSaEfNoXMDDgdvo7Z\nejYDq+priMM4xa9s7+7VGKmUtj6Y5uoA9wjbE8Rty8Cz8ED8ky0e1+VNwpAKr7H7\nFVrpeQ+JAgMBAAECggEAL+cDv+rbp+nSojijbus9DRs3KMy1QhgQ25w62uXbA25/\n7o7vKTiZMS9Y9FyJeWNuxJIg8qLZdrcLrfwWbP/Uzto+ARfDwc/ZDlPAeYiPxaus\n5+gABam7RHKY+oSRmFwqp53/kWv8/Tzytbzsk4OzwIpvfHMpVc/2Hc/PUqlodoWW\n0y7bNWRf5FUtO1AjAdX9tS9O8jfoUKMIuGKvybxLKTd3JvHk05eMWUT0cd9IXnvE\nD+GQzLaNMz+0mwJ7KpanKk38hkIpAAX6EnX7en5nU63x4MPueiLSHybZd3Na9Yrs\n/ARH9CkKTb0XiJZfMzWCWwlKZ6L3OzhBTdvwK037CQKBgQDi+bleQ9EucZtw0A6U\nrT8bVaUiM/F+gUXxrLVdwcWRyQ64OgGSq48z+jGrig3IYNQDVfErwBtlNDhr8MOb\nqxiol8QGp3wC/cQs2wDRu1IfkFFVyDKyQNGxPTF7YZZSQXxyCwhe+XB1OWyvkFRE\nwVoK/SczHZav27E0UhOThuKm7wKBgQDBK9QJujlaHCHUjjuXWpUTfWK6871kkXOh\nWGDxty6GTNk8kUcMdPlh7Dsvd6082q+/dTdAmrjKBYWkiiddrwq8ID/CikiLIEWM\nI0nLvMZBmHfmy79+6stOTBvoefMdLr98wHriaQpC9ZZ+sbr+P5IanDTaEAew8ocZ\nxcKKI9lxBwKBgQCaNSw53T2LnmgLV2/wl1weyCtvd3cFifLpZXu7fWEr0TwM8mwL\nKEAdAkko0JzYnOCue39lSBnUwovq2iMr6izQrnviQXxB1AOqrgh6dhgvla+M5n17\nGgrdrkOmHgExVYilOtWvIS3ElwU+qoJ2TB9PA/vUALBWPp7Ae1sNikEHRQKBgE2L\nDn8pJkSp7lqpDfrf/d/pAW0S0wA/8y7dj2z4n9CBoOLTXrX9bu6EKe4QGJbJIqu0\nng1tDqjqNo+qdcsBrUl/mJi7cguHVOPAdqs2iE9kqR0YxTJphltT6hAUhCc+0Nd/\nXNTuXZQridIp/mp5kmjkM8MllDDP6rPJ0yIo6eyZAoGBAIxn6APiClSu4TYRGdWD\n9t9UU7Wp6QlD75XJr6M6TfNKOkjK4U2SoNSLHrTXqDgcJt3erjFf3RgygU4gYAfL\n7ftLRq4XNvbe/4ss8p5uJenmBtDBtIvl7P3/qw9PEzPeKyHYn0p9ItBRqhefoiVq\nWvdfo7ixDTUa1xVYotqHTpOL\n-----END PRIVATE KEY-----\n",
    "client_email": "firebase-adminsdk-t8qvn@my-project-4c3cf.iam.gserviceaccount.com",
    "client_id": "111464722181132595509",
    "auth_uri": "https://accounts.google.com/o/oauth2/auth",
    "token_uri": "https://oauth2.googleapis.com/token",
    "auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs",
    "client_x509_cert_url": "https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-t8qvn%40my-project-4c3cf.iam.gserviceaccount.com"
  }

admin.initializeApp({
    credential: admin.credential.cert(seriveAccount)
});

module.exports = admin;