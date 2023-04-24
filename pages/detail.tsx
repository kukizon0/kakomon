import Image from 'next/image'

export default function Detail(props:any) {

    return (
        <div>
             <Image
            // className={styles.logo}
            src={props.book.book_img_link}
            alt="Next.js Logo"
            width={150}
            height={150}
            priority
          />
          <div >
            <h2>{props.book.book_title}</h2>
            <p>{props.book.author}</p>
          </div>

          <div>
            <h3>{props.book.headline1}</h3>
            <p>{props.book.content1}</p>
          </div>
          
          <div>
          <h3>{props.book.headline2}</h3>
            <p>{props.book.content2}</p>
          </div>

          <div>
            <h3>{props.book.detail_explanation_title}</h3>
            <p>{props.detail_explanation_content}</p>
          </div>

        </div>
    )
}
// export Detail;