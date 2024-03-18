export interface city{
    name:string,
    long:number,
    lat:number
}

export class cityManager{

    private cities:city[] = [
        {name:"Burdur", long:35.2137, lat:31.7683},
        {name:"Istanbul", long:28.9784, lat:41.0082},
        {name:"Ankara", long:32.8597, lat:39.9334},
        {name:"Izmir", long:27.1428, lat:38.4192},
        {name:"Antalya", long:30.7133, lat:36.8969},
        {name:"Adana", long:35.3289, lat:37.0004},
        {name:"Bursa", long:29.0948, lat:40.1824},
        {name:"Konya", long:32.4824, lat:37.8713},
        {name:"Mersin", long:34.6124, lat:36.7951},
        {name:"Kayseri", long:35.4900, lat:38.7333},
       
    ]

    getCities():city[]{
        return this.cities;
    }

}
