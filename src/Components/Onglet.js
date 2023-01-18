import React, {useState} from 'react';
import './Onglet.css'

export default function Onglet() {

    const [stateOnglets, setStateOnglets] = useState(1);

    const goFR = () => {
        setStateOnglets(1)
    }
    const goEN = () => {
        setStateOnglets(2)
    }

  return (
    <div>
        <div className="contBtn">
<div onClick={goFR} className={`onglets ${stateOnglets === 1 ? 'active' : ''}`}>Français</div>
<div onClick={goEN} className={`onglets ${stateOnglets === 2 ? 'active' : ''}`}>Anglais</div>
        </div>
        <div className="container">
            {stateOnglets === 1 ?
                <p className="contenu fr">
                    FR
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. A eius sit incidunt unde similique sunt voluptate qui explicabo dignissimos, reiciendis eligendi fugiat necessitatibus aspernatur reprehenderit nihil assumenda tenetur? Amet dolores doloremque ad, velit deserunt aliquid, optio eius minus, exercitationem incidunt aut assumenda sit adipisci deleniti enim dicta quo praesentium obcaecati labore! Necessitatibus voluptatum saepe maxime rem tenetur laboriosam ratione temporibus dignissimos aspernatur tempore, aliquid odio minima magni voluptatibus praesentium ipsam officia ipsum deserunt suscipit eligendi repellat ipsa explicabo optio esse. Architecto provident reiciendis praesentium delectus soluta itaque at commodi. Porro iusto nulla, ab corporis maxime enim reiciendis numquam veritatis aspernatur nobis quidem, dignissimos iure velit, sapiente libero hic nemo excepturi inventore omnis. Libero doloremque recusandae voluptatibus accusamus placeat corporis commodi quis iusto harum voluptatum facilis in et amet excepturi maiores, id molestias totam distinctio quas officiis. Eum vitae ipsum ut optio a possimus ducimus nobis quaerat saepe quasi, maiores eos?
                </p>
            :
                <p className="contenu en">
                    EN
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur rerum quidem ipsam sint voluptatum suscipit ipsum numquam est animi quibusdam praesentium, impedit dolores ea debitis facilis voluptates illo non quo! Expedita voluptatibus dolorem aut libero vero aliquid excepturi totam illum nam, earum repudiandae commodi doloremque reiciendis quidem perferendis labore itaque magnam repellat dolore officiis dolores quasi tenetur quam animi. Porro ut accusamus delectus cupiditate animi! Ex enim, nemo ipsum quis est adipisci fugit necessitatibus, quam qui repellat voluptate quibusdam maxime cupiditate, atque tempore itaque unde? Laborum corrupti odio tempore minima deserunt, temporibus nam est quasi explicabo placeat, corporis recusandae? Aut officiis amet quas. Non iusto adipisci sapiente dolor, assumenda quae, libero vero eos culpa ea maxime rem veritatis deserunt officia reprehenderit sed eveniet animi nesciunt!
                </p>
            }
        </div>
    </div>
  )
}
