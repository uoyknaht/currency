import toastr from 'toastr';

toastr.options.timeOut = 1000;

class NotifierService {

  success(msg, options) {
    toastr.success(msg, options);
  }

  error(msg, options) {
    toastr.error(msg, options);
  }

}

export default new NotifierService();
