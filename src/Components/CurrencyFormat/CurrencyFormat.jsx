import numeral from 'numeral'


function CurrencyFormat({amount}) {

    const formattedamount = numeral(amount).format("$0,0.00")
    
  return (
    <div>
        {formattedamount}
    </div>
  )
}

export default CurrencyFormat