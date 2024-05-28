import React from 'react'
import'./ClassroomArabic.css'
import selectTe from'../../Assets/Images/teacher_1.jpg'
export default function ClassroomArabic() {
  return<>
 
    <div className="row  pt-5 ">
        <div className="col-md-3 ">
            <div className="teaher-sideCard m-auto text-center">
            <img className='w-100 m-auto' src={selectTe} alt="teacher" />
            <h2>Teacher 1</h2>
            </div>
            <hr />
            {/* <div id="calendar"></div> */}
        </div>
        <div className="col-md-6 bg-info"><p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ullam necessitatibus obcaecati nesciunt? Officiis iusto, possimus molestiae temporibus deleniti modi eum, nihil quia magni deserunt nisi asperiores doloribus debitis! Cumque a in maiores iste distinctio fuga tempore asperiores temporibus et sed odit aliquam autem error ad aperiam, inventore at, perferendis explicabo repellat ratione minima sapiente. Numquam fugit voluptatibus ea illo deleniti perspiciatis magni ipsa nihil non, sint sed omnis aspernatur totam exercitationem qui sapiente magnam quaerat ex obcaecati iste repellat iusto laudantium maxime! Quo, iure repellat at magni similique iusto molestias impedit ipsam et numquam nulla, dolorem repudiandae consequuntur error enim?</p></div>
        <div className="col-md-3 bg-light"><p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ullam necessitatibus obcaecati nesciunt? Officiis iusto, possimus molestiae temporibus deleniti modi eum, nihil quia magni deserunt nisi asperiores doloribus debitis! Cumque a in maiores iste distinctio fuga tempore asperiores temporibus et sed odit aliquam autem error ad aperiam, inventore at, perferendis explicabo repellat ratione minima sapiente. Numquam fugit voluptatibus ea illo deleniti perspiciatis magni ipsa nihil non, sint sed omnis aspernatur totam exercitationem qui sapiente magnam quaerat ex obcaecati iste repellat iusto laudantium maxime! Quo, iure repellat at magni similique iusto molestias impedit ipsam et numquam nulla, dolorem repudiandae consequuntur error enim?</p></div>
    </div>
  </>
}

