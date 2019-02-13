/* описаниние классов, которые будут хранить
наши данные models.py в Django*/
class Courier 
{
	constructor(id, name){
		this.Id = id;
		this.Name = name;
	 }
	getId()
	{
		//console.log(this.Id);
		return this.Id;
	}
	getName()
	{
		//console.log(this.Name);
		return this.Name;
	}
};
class CourierTransfer
{
	constructor(){
		this.Id = id;
		this.Courier_id_fk = courier_id_fk;
		this.Date = date;
		this.Time = time;
		this.Sum = sum;
	}

};
module.exports.Courier = Courier;
module.exports.CourierTransfer = CourierTransfer;
//module.exports.Courier.prototype = prot;

