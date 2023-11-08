import { useEffect, useState } from 'react';
import './users.css'
import usersLogo from '../../Image/photo_people.jpg'
import axios from 'axios';

function Users () {
    const [users, setUsers] = useState()
    const data = [
      {
        "id": 159,
        "image": "http://faceids.tadi.uz/uploads/2023/11/07/face_event/130030_face_thumbnail_TdrhiQ.jpg",
        "name": "Azimov Shohruh",
        "create_date": "2023-11-07T13:00:28+00:00"
      },
      {
        "id": 55,
        "image": "http://faceids.tadi.uz/uploads/2023/11/07/face_event/084224_face_thumbnail_oUS8CK.jpg",
        "name": "Alijon Abdurasulov",
        "create_date": "2023-11-07T08:42:23+00:00"
      },
      {
        "id": 157,
        "image": "http://faceids.tadi.uz/uploads/2023/11/07/face_event/082231_face_thumbnail_EmVDuo.jpg",
        "name": "Sharofiddin",
        "create_date": "2023-11-07T08:22:28+00:00"
      },
      {
        "id": 3,
        "image": "http://faceids.tadi.uz/uploads/2023/11/07/face_event/033438_face_thumbnail_YJuIwp.jpg",
        "name": "Erkin Narmetov",
        "create_date": "2023-11-01T03:34:37+00:00"
      }
    ]

    const fetchData = async () => {
        try {
          // const response = await axios.get('https://www.workers.yomon-emas.uz/api/get-workers');
          setUsers(data)
        } catch (error) {
          console.error(error);
        }
      };

      useEffect(() => {
        fetchData();
      }, []);
    return (
        <div className='user'>
            <div>
                <div className='user_inner'>
                    <table className="table table-bordered table-hover" id="myTable">
                        <thead>
                            <tr>
                            <th style={{width: "20px"}} className='users_heading'>#</th>
                            <th style={{width: "100px"}} className='users_heading'>Фото</th>
                            <th  className='users_heading'>Фамилия и имя</th>

                            </tr>
                        </thead>
                        <tbody>
                        {users?.map((item, index) => (
                        <tr className="userTables" key={index}>
                        <th><p>{index + 1}</p></th>
                        <td><img className="userImg" src={(item?.image) ? item?.image : usersLogo} width='50' height='50' alt='agressiyaImg' /></td>
                        <td><p>{item?.name}</p></td>
                        </tr>
                    ))}
                        </tbody>
                        </table>
                </div>
            </div>
        </div>
    )
}


export default Users;