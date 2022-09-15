import React from 'react'
import { Card } from 'react-bootstrap'
const styles = {
    card: {
  

      padding: '3rem',
      width: '2vw',
      height: '7vh'
    },
    cardImage: {
      objectFit: 'cover',
      borderRadius: 55
    }
  }

const Detail = () => {
    return (
        <>
             <Card className='my-3 p-3 rounded'>
            <a href={`/product/`}>
                <Card.Img src={'/images/nestle/petcare-category1.jpeg'} variant='top' style={styles.card}></Card.Img>
            </a>
            </Card>
        </>
    )
}

export default Detail
