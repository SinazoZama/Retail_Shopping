module.exports = function myShop(pool) {

    var getOrder = '';
    var getColour = '';
    var getSize = 0;
    var getGender = '';
    var getEmail = '';
    var getPrice = 0;
    var checkBut = '';
    var final = []
    var order_nos;
    var known;


    var myName = '';

    var myObj = {}
    function addName(gender) {
        getGender = gender

    }

    function myData(emails, colour, size) {
        getEmail = emails
        getColour = colour
        getSize = size
        //  await pool.query('insert into shoes (types , colours, size) values ($1,$2,$3)', [getType, getColour, getSize]);
    }

    function pricesData(price) {
        getPrice = price

    }

    function getOrders() {
        getOrder = Math.floor(1000 + Math.random() * 9000);
    }

   async function allData() {

        myObj = {
            mails: getEmail,
            genders: getGender,
            colours: getColour,
            sizes: getSize,
            prices: getPrice,
            orders: getOrder
        }
        


    }

   async function finalData() {
        await pool.query('insert into retails (email ,gender, colour, size, price, order_no) values ($1,$2,$3,$4,$5,$6)', [myObj.mails, myObj.genders, myObj.colours, myObj.sizes, myObj.prices, myObj.orders]);
        return myObj
    }

    async function checkOrder(orderz){
        order_nos = orderz
        
        known = await pool.query('SELECT * FROM retails')
        
        
                for (var i = 0; i < known.rows.length; i++) {
                    var user = known.rows[i]
                    if (user.order_no == order_nos) {
                        final.push(user)
                    }
                   
                }
                
    }

    async function finalOrders(){
        known = await pool.query('SELECT * FROM retails')
        return final
    }

    return {
        addName,
        myData,
        allData,
        getOrders,
        finalData,
        pricesData,
        checkOrder,
        finalOrders
    }
}