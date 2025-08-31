class DeviceController {
    constructor() {
    }
    getDevice(device) {
        let width = 0;
        switch(device) {
          case 'sm':
            width = 750;
            break;
          default:
            break;
        }
      return width;
    }
  }
  
  export default DeviceController