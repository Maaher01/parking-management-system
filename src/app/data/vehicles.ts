export class Init {
    load() {
      if(localStorage.getItem('vehicles') === null || localStorage.getItem('vehicles') == undefined) {
        console.log('No Vehicles Found...');
        let vehicles: any = [];
  
        localStorage.setItem('vehicles', JSON.stringify(vehicles));
        return 
      }
    }
  }