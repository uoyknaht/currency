import $ from 'jquery';

class ApiService {

  get(url) {
    return new Promise((resolve) => {
      $.get(url, (response) => {
        resolve(response)
      });
    });
  }

  post(url, data) {
    return new Promise((resolve, reject) => {
      $.post({
          url: url,
          data: JSON.stringify(data),
          contentType: 'application/json',
          success: (response) => {
              resolve(response);
          },
          error: () => {
            reject();
          }
      });
    });
  }

  put(url, data) {
    return new Promise((resolve, reject) => {
      $.ajax({
          url: url,
          type: 'PUT',
          success: () => {
              resolve();
          },
          error: () => {
            reject();
          }
      });
    });
  }

  delete(url) {
    return new Promise((resolve, reject) => {
      $.ajax({
          url: url,
          type: 'DELETE',
          success: () => {
              resolve();
          },
          error: () => {
            reject();
          }
      });
    });
  }

}

export default new ApiService();
