import React, { useEffect, useState } from 'react';
import './myComponent.css'
import axios from 'axios';
function MyComponent() {
    const [user, setUser] = useState()
    const today = new Date();
const newMonth = String(today.getMonth() + 1).padStart(2, '0');
const newDay = String(today.getDate()).padStart(2, '0');
const newYear = today.getFullYear();
const currentDate = `${newYear}-${newMonth}-${newDay}`;
    const [selectedDate, setSelectedDate] = useState(currentDate);
    const parts = selectedDate.split('-')
    const fetchYear = parts[0]
    const fetchMonth = parts[1]
    const fetchDayIMonths = new Date(fetchYear, fetchMonth, 0).getDate();
    const data = [
      {
        "id": 1159,
        "image": "http://faceids.tadi.uz/uploads/2023/11/07/face_event/130030_face_thumbnail_TdrhiQ.jpg",
        "full_name": "Azimov Shohruh",
        "create_date": "2023-12-30T13:00:28+00:00"
      },
      {
        "id": 1159,
        "image": "http://faceids.tadi.uz/uploads/2023/11/07/face_event/130030_face_thumbnail_TdrhiQ.jpg",
        "full_name": "Azimov Shohruh",
        "create_date": "2023-12-29T13:00:28+00:00"
      },
      {
        "id": 1159,
        "image": "http://faceids.tadi.uz/uploads/2023/11/07/face_event/130030_face_thumbnail_TdrhiQ.jpg",
        "full_name": "Azimov Shohruh",
        "create_date": "2023-12-28T13:00:28+00:00"
      },
      {
        "id": 1159,
        "image": "http://faceids.tadi.uz/uploads/2023/11/07/face_event/130030_face_thumbnail_TdrhiQ.jpg",
        "full_name": "Azimov Shohruh",
        "create_date": "2023-12-27T13:00:28+00:00"
      },
      {
        "id": 1159,
        "image": "http://faceids.tadi.uz/uploads/2023/11/07/face_event/130030_face_thumbnail_TdrhiQ.jpg",
        "full_name": "Azimov Shohruh",
        "create_date": "2023-12-26T13:00:28+00:00"
      },
      {
        "id": 1159,
        "image": "http://faceids.tadi.uz/uploads/2023/11/07/face_event/130030_face_thumbnail_TdrhiQ.jpg",
        "full_name": "Azimov Shohruh",
        "create_date": "2023-12-25T13:00:28+00:00"
      },
      {
        "id": 1159,
        "image": "http://faceids.tadi.uz/uploads/2023/11/07/face_event/130030_face_thumbnail_TdrhiQ.jpg",
        "full_name": "Azimov Shohruh",
        "create_date": "2023-12-24T13:00:28+00:00"
      },
      {
        "id": 1159,
        "image": "http://faceids.tadi.uz/uploads/2023/11/07/face_event/130030_face_thumbnail_TdrhiQ.jpg",
        "full_name": "Azimov Shohruh",
        "create_date": "2023-12-16T13:00:28+00:00"
      },
      {
        "id": 1159,
        "image": "http://faceids.tadi.uz/uploads/2023/11/07/face_event/130030_face_thumbnail_TdrhiQ.jpg",
        "full_name": "Azimov Shohruh",
        "create_date": "2023-12-15T13:00:28+00:00"
      },
      {
        "id": 1159,
        "image": "http://faceids.tadi.uz/uploads/2023/11/07/face_event/130030_face_thumbnail_TdrhiQ.jpg",
        "full_name": "Azimov Shohruh",
        "create_date": "2023-12-10T13:00:28+00:00"
      },
      {
        "id": 1159,
        "image": "http://faceids.tadi.uz/uploads/2023/11/07/face_event/130030_face_thumbnail_TdrhiQ.jpg",
        "full_name": "Azimov Shohruh",
        "create_date": "2023-12-09T13:00:28+00:00"
      },
      {
        "id": 1159,
        "image": "http://faceids.tadi.uz/uploads/2023/11/07/face_event/130030_face_thumbnail_TdrhiQ.jpg",
        "full_name": "Azimov Shohruh",
        "create_date": "2023-12-08T13:00:28+00:00"
      },
      {
        "id": 1159,
        "image": "http://faceids.tadi.uz/uploads/2023/11/07/face_event/130030_face_thumbnail_TdrhiQ.jpg",
        "full_name": "Azimov Shohruh",
        "create_date": "2023-12-01T13:00:28+00:00"
      },
      {
        "id": 1159,
        "image": "http://faceids.tadi.uz/uploads/2023/11/07/face_event/130030_face_thumbnail_TdrhiQ.jpg",
        "full_name": "Azimov Shohruh",
        "create_date": "2023-12-02T13:00:28+00:00"
      },
      {
        "id": 1159,
        "image": "http://faceids.tadi.uz/uploads/2023/11/07/face_event/130030_face_thumbnail_TdrhiQ.jpg",
        "full_name": "Azimov Shohruh",
        "create_date": "2023-12-03T13:00:28+00:00"
      },
      {
        "id": 1159,
        "image": "http://faceids.tadi.uz/uploads/2023/11/07/face_event/130030_face_thumbnail_TdrhiQ.jpg",
        "full_name": "Azimov Shohruh",
        "create_date": "2023-12-04T13:00:28+00:00"
      },
      {
        "id": 1159,
        "image": "http://faceids.tadi.uz/uploads/2023/11/07/face_event/130030_face_thumbnail_TdrhiQ.jpg",
        "full_name": "Azimov Shohruh",
        "create_date": "2023-12-05T13:00:28+00:00"
      },
      {
        "id": 1159,
        "image": "http://faceids.tadi.uz/uploads/2023/11/07/face_event/130030_face_thumbnail_TdrhiQ.jpg",
        "full_name": "Azimov Shohruh",
        "create_date": "2023-12-06T13:00:28+00:00"
      },
      {
        "id": 1159,
        "image": "http://faceids.tadi.uz/uploads/2023/11/07/face_event/130030_face_thumbnail_TdrhiQ.jpg",
        "full_name": "Azimov Shohruh",
        "create_date": "2023-12-07T13:00:28+00:00"
      },
      {
        "id": 1159,
        "image": "http://faceids.tadi.uz/uploads/2023/11/07/face_event/130030_face_thumbnail_TdrhiQ.jpg",
        "full_name": "Azimov Shohruh",
        "create_date": "2023-12-07T13:00:28+00:00"
      },
      {
        "id": 459,
        "image": "http://faceids.tadi.uz/uploads/2023/11/07/face_event/130030_face_thumbnail_TdrhiQ.jpg",
        "full_name": "Azimov Shohruh",
        "create_date": "2023-12-07T13:00:28+00:00"
      },
      {
        "id": 19,
        "image": "http://faceids.tadi.uz/uploads/2023/11/07/face_event/130030_face_thumbnail_TdrhiQ.jpg",
        "full_name": "Azimov Shohruh",
        "create_date": "2023-11-07T13:00:28+00:00"
      },
      {
        "id": 1594,
        "image": "http://faceids.tadi.uz/uploads/2023/11/07/face_event/130030_face_thumbnail_TdrhiQ.jpg",
        "full_name": "Azimov Shohruh",
        "create_date": "2023-11-07T13:00:28+00:00"
      },
      {
        "id": 152,
        "image": "http://faceids.tadi.uz/uploads/2023/11/07/face_event/130030_face_thumbnail_TdrhiQ.jpg",
        "full_name": "Azimov Shohruh",
        "create_date": "2023-11-07T13:00:28+00:00"
      },
      {
        "id": 15,
        "image": "http://faceids.tadi.uz/uploads/2023/11/07/face_event/130030_face_thumbnail_TdrhiQ.jpg",
        "full_name": "Azimov Shohruh",
        "create_date": "2023-11-07T13:00:28+00:00"
      },
      {
        "id": 159,
        "image": "http://faceids.tadi.uz/uploads/2023/11/07/face_event/130030_face_thumbnail_TdrhiQ.jpg",
        "full_name": "Azimov Shohruh",
        "create_date": "2023-11-07T13:00:28+00:00"
      },
      {
        "id": 159,
        "image": "http://faceids.tadi.uz/uploads/2023/11/07/face_event/130028_face_thumbnail_9v8KJI.jpg",
        "full_name": "Azimov Shohruh",
        "create_date": "2023-11-07T13:00:28+00:00"
      },
      {
        "id": 55,
        "image": "http://faceids.tadi.uz/uploads/2023/11/07/face_event/084224_face_thumbnail_oUS8CK.jpg",
        "full_name": "Alijon Abdurasulov",
        "create_date": "2023-11-07T08:42:23+00:00"
      },
      {
        "id": 159,
        "image": "http://faceids.tadi.uz/uploads/2023/11/07/face_event/082429_face_thumbnail_vQZIuR.jpg",
        "full_name": "Azimov Shohruh",
        "create_date": "2023-11-07T08:24:25+00:00"
      },
      {
        "id": 159,
        "image": "http://faceids.tadi.uz/uploads/2023/11/07/face_event/082425_face_thumbnail_Cojm5v.jpg",
        "full_name": "Azimov Shohruh",
        "create_date": "2023-11-07T08:24:25+00:00"
      },
      {
        "id": 159,
        "image": "http://faceids.tadi.uz/uploads/2023/11/07/face_event/082424_face_thumbnail_yckjhZ.jpg",
        "full_name": "Azimov Shohruh",
        "create_date": "2023-11-07T08:24:24+00:00"
      },
      {
        "id": 157,
        "image": "http://faceids.tadi.uz/uploads/2023/11/07/face_event/082231_face_thumbnail_EmVDuo.jpg",
        "full_name": "Sharofiddin",
        "create_date": "2023-11-07T08:22:28+00:00"
      },
      {
        "id": 157,
        "image": "http://faceids.tadi.uz/uploads/2023/11/07/face_event/082228_face_thumbnail_jDiTmA.jpg",
        "full_name": "Sharofiddin",
        "create_date": "2023-11-07T08:22:28+00:00"
      },
      {
        "id": 157,
        "image": "http://faceids.tadi.uz/uploads/2023/11/07/face_event/082226_face_thumbnail_u5wCHf.jpg",
        "full_name": "Sharofiddin",
        "create_date": "2023-11-07T08:22:25+00:00"
      },
      {
        "id": 157,
        "image": "http://faceids.tadi.uz/uploads/2023/11/07/face_event/082225_face_thumbnail_AJp8Eg.jpg",
        "full_name": "Sharofiddin",
        "create_date": "2023-11-07T08:22:25+00:00"
      },
      {
        "id": 157,
        "image": "http://faceids.tadi.uz/uploads/2023/11/07/face_event/082224_face_thumbnail_K8hVmZ.jpg",
        "full_name": "Sharofiddin",
        "create_date": "2023-11-07T08:22:23+00:00"
      },
      {
        "id": 159,
        "image": "http://faceids.tadi.uz/uploads/2023/11/07/face_event/040026_face_thumbnail_yJeDin.jpg",
        "full_name": "Azimov Shohruh",
        "create_date": "2023-11-07T04:00:24+00:00"
      },
      {
        "id": 159,
        "image": "http://faceids.tadi.uz/uploads/2023/11/07/face_event/040024_face_thumbnail_neuLYR.jpg",
        "full_name": "Azimov Shohruh",
        "create_date": "2023-11-07T04:00:24+00:00"
      },
      {
        "id": 157,
        "image": "http://faceids.tadi.uz/uploads/2023/11/07/face_event/035425_face_thumbnail_DbSKX8.jpg",
        "full_name": "Sharofiddin",
        "create_date": "2023-11-07T03:54:23+00:00"
      },
      {
        "id": 157,
        "image": "http://faceids.tadi.uz/uploads/2023/11/07/face_event/035424_face_thumbnail_YdL253.jpg",
        "full_name": "Sharofiddin",
        "create_date": "2023-11-07T03:54:23+00:00"
      },
      {
        "id": 3,
        "image": "http://faceids.tadi.uz/uploads/2023/11/07/face_event/033438_face_thumbnail_YJuIwp.jpg",
        "full_name": "Erkin Narmetov",
        "create_date": "2023-11-07T03:34:37+00:00"
      },

      {
        "id": 159,
        "image": "http://faceids.tadi.uz/uploads/2023/11/07/face_event/130030_face_thumbnail_TdrhiQ.jpg",
        "full_name": "Azimov Shohruh",
        "create_date": "2023-11-01T13:00:28+00:00"
      },
      {
        "id": 159,
        "image": "http://faceids.tadi.uz/uploads/2023/11/07/face_event/130028_face_thumbnail_9v8KJI.jpg",
        "full_name": "Azimov Shohruh",
        "create_date": "2023-11-01T13:00:28+00:00"
      },
      {
        "id": 55,
        "image": "http://faceids.tadi.uz/uploads/2023/11/07/face_event/084224_face_thumbnail_oUS8CK.jpg",
        "full_name": "Alijon Abdurasulov",
        "create_date": "2023-11-01T08:42:23+00:00"
      },
      {
        "id": 159,
        "image": "http://faceids.tadi.uz/uploads/2023/11/07/face_event/082429_face_thumbnail_vQZIuR.jpg",
        "full_name": "Azimov Shohruh",
        "create_date": "2023-11-01T08:24:25+00:00"
      },
      {
        "id": 159,
        "image": "http://faceids.tadi.uz/uploads/2023/11/07/face_event/082425_face_thumbnail_Cojm5v.jpg",
        "full_name": "Azimov Shohruh",
        "create_date": "2023-11-01T08:24:25+00:00"
      },
      {
        "id": 159,
        "image": "http://faceids.tadi.uz/uploads/2023/11/07/face_event/082424_face_thumbnail_yckjhZ.jpg",
        "full_name": "Azimov Shohruh",
        "create_date": "2023-11-01T08:24:24+00:00"
      },
      {
        "id": 157,
        "image": "http://faceids.tadi.uz/uploads/2023/11/07/face_event/082231_face_thumbnail_EmVDuo.jpg",
        "full_name": "Sharofiddin",
        "create_date": "2023-11-01T08:22:28+00:00"
      },
      {
        "id": 157,
        "image": "http://faceids.tadi.uz/uploads/2023/11/07/face_event/082228_face_thumbnail_jDiTmA.jpg",
        "full_name": "Sharofiddin",
        "create_date": "2023-11-01T08:22:28+00:00"
      },
      {
        "id": 157,
        "image": "http://faceids.tadi.uz/uploads/2023/11/07/face_event/082226_face_thumbnail_u5wCHf.jpg",
        "full_name": "Sharofiddin",
        "create_date": "2023-11-01T08:22:25+00:00"
      },
      {
        "id": 157,
        "image": "http://faceids.tadi.uz/uploads/2023/11/07/face_event/082225_face_thumbnail_AJp8Eg.jpg",
        "full_name": "Sharofiddin",
        "create_date": "2023-11-01T08:22:25+00:00"
      },
      {
        "id": 157,
        "image": "http://faceids.tadi.uz/uploads/2023/11/07/face_event/082224_face_thumbnail_K8hVmZ.jpg",
        "full_name": "Sharofiddin",
        "create_date": "2023-11-01T08:22:23+00:00"
      },
      {
        "id": 159,
        "image": "http://faceids.tadi.uz/uploads/2023/11/07/face_event/040026_face_thumbnail_yJeDin.jpg",
        "full_name": "Azimov Shohruh",
        "create_date": "2023-11-01T04:00:24+00:00"
      },
      {
        "id": 159,
        "image": "http://faceids.tadi.uz/uploads/2023/11/07/face_event/040024_face_thumbnail_neuLYR.jpg",
        "full_name": "Azimov Shohruh",
        "create_date": "2023-11-01T04:00:24+00:00"
      },
      {
        "id": 157,
        "image": "http://faceids.tadi.uz/uploads/2023/11/07/face_event/035425_face_thumbnail_DbSKX8.jpg",
        "full_name": "Sharofiddin",
        "create_date": "2023-11-01T03:54:23+00:00"
      },
      {
        "id": 157,
        "image": "http://faceids.tadi.uz/uploads/2023/11/07/face_event/035424_face_thumbnail_YdL253.jpg",
        "full_name": "Sharofiddin",
        "create_date": "2023-11-01T03:54:23+00:00"
      },
      {
        "id": 3,
        "image": "http://faceids.tadi.uz/uploads/2023/11/07/face_event/033438_face_thumbnail_YJuIwp.jpg",
        "full_name": "Erkin Narmetov",
        "create_date": "2023-11-01T03:34:37+00:00"
      },

      {
        "id": 159,
        "image": "http://faceids.tadi.uz/uploads/2023/11/07/face_event/130030_face_thumbnail_TdrhiQ.jpg",
        "full_name": "Azimov Shohruh",
        "create_date": "2023-11-08T13:00:28+00:00"
      },
      {
        "id": 159,
        "image": "http://faceids.tadi.uz/uploads/2023/11/07/face_event/130028_face_thumbnail_9v8KJI.jpg",
        "full_name": "Azimov Shohruh",
        "create_date": "2023-11-08T13:00:28+00:00"
      },
      {
        "id": 55,
        "image": "http://faceids.tadi.uz/uploads/2023/11/07/face_event/084224_face_thumbnail_oUS8CK.jpg",
        "full_name": "Alijon Abdurasulov",
        "create_date": "2023-11-08T08:42:23+00:00"
      },
      {
        "id": 159,
        "image": "http://faceids.tadi.uz/uploads/2023/11/07/face_event/082429_face_thumbnail_vQZIuR.jpg",
        "full_name": "Azimov Shohruh",
        "create_date": "2023-11-08T08:24:25+00:00"
      },
      {
        "id": 159,
        "image": "http://faceids.tadi.uz/uploads/2023/11/07/face_event/082425_face_thumbnail_Cojm5v.jpg",
        "full_name": "Azimov Shohruh",
        "create_date": "2023-11-08T08:24:25+00:00"
      },
      {
        "id": 159,
        "image": "http://faceids.tadi.uz/uploads/2023/11/07/face_event/082424_face_thumbnail_yckjhZ.jpg",
        "full_name": "Azimov Shohruh",
        "create_date": "2023-11-08T08:24:24+00:00"
      },
      {
        "id": 157,
        "image": "http://faceids.tadi.uz/uploads/2023/11/07/face_event/082231_face_thumbnail_EmVDuo.jpg",
        "full_name": "Sharofiddin",
        "create_date": "2023-11-08T08:22:28+00:00"
      },
      {
        "id": 157,
        "image": "http://faceids.tadi.uz/uploads/2023/11/07/face_event/082228_face_thumbnail_jDiTmA.jpg",
        "full_name": "Sharofiddin",
        "create_date": "2023-11-08T08:22:28+00:00"
      },
      {
        "id": 157,
        "image": "http://faceids.tadi.uz/uploads/2023/11/07/face_event/082226_face_thumbnail_u5wCHf.jpg",
        "full_name": "Sharofiddin",
        "create_date": "2023-11-08T08:22:25+00:00"
      },
      {
        "id": 157,
        "image": "http://faceids.tadi.uz/uploads/2023/11/07/face_event/082225_face_thumbnail_AJp8Eg.jpg",
        "full_name": "Sharofiddin",
        "create_date": "2023-11-08T08:22:25+00:00"
      },
      {
        "id": 157,
        "image": "http://faceids.tadi.uz/uploads/2023/11/07/face_event/082224_face_thumbnail_K8hVmZ.jpg",
        "full_name": "Sharofiddin",
        "create_date": "2023-11-08T08:22:23+00:00"
      },
      {
        "id": 159,
        "image": "http://faceids.tadi.uz/uploads/2023/11/07/face_event/040026_face_thumbnail_yJeDin.jpg",
        "full_name": "Azimov Shohruh",
        "create_date": "2023-11-08T04:00:24+00:00"
      },
      {
        "id": 159,
        "image": "http://faceids.tadi.uz/uploads/2023/11/07/face_event/040024_face_thumbnail_neuLYR.jpg",
        "full_name": "Azimov Shohruh",
        "create_date": "2023-11-08T04:00:24+00:00"
      },
      {
        "id": 157,
        "image": "http://faceids.tadi.uz/uploads/2023/11/07/face_event/035425_face_thumbnail_DbSKX8.jpg",
        "full_name": "Sharofiddin",
        "create_date": "2023-11-08T03:54:23+00:00"
      },
      {
        "id": 157,
        "image": "http://faceids.tadi.uz/uploads/2023/11/07/face_event/035424_face_thumbnail_YdL253.jpg",
        "full_name": "Sharofiddin",
        "create_date": "2023-11-08T03:54:23+00:00"
      },
      {
        "id": 3,
        "image": "http://faceids.tadi.uz/uploads/2023/11/07/face_event/033438_face_thumbnail_YJuIwp.jpg",
        "full_name": "Erkin Narmetov",
        "create_date": "2023-11-08T03:34:37+00:00"
      },

      {
        "id": 159,
        "image": "http://faceids.tadi.uz/uploads/2023/11/07/face_event/130030_face_thumbnail_TdrhiQ.jpg",
        "full_name": "Azimov Shohruh",
        "create_date": "2023-10-03T13:00:28+00:00"
      },
      {
        "id": 159,
        "image": "http://faceids.tadi.uz/uploads/2023/11/07/face_event/130028_face_thumbnail_9v8KJI.jpg",
        "full_name": "Azimov Shohruh",
        "create_date": "2023-10-03T13:00:28+00:00"
      },
      {
        "id": 55,
        "image": "http://faceids.tadi.uz/uploads/2023/11/07/face_event/084224_face_thumbnail_oUS8CK.jpg",
        "full_name": "Alijon Abdurasulov",
        "create_date": "2023-10-03T08:42:23+00:00"
      },
      {
        "id": 159,
        "image": "http://faceids.tadi.uz/uploads/2023/11/07/face_event/082429_face_thumbnail_vQZIuR.jpg",
        "full_name": "Azimov Shohruh",
        "create_date": "2023-10-03T08:24:25+00:00"
      },
      {
        "id": 159,
        "image": "http://faceids.tadi.uz/uploads/2023/11/07/face_event/082425_face_thumbnail_Cojm5v.jpg",
        "full_name": "Azimov Shohruh",
        "create_date": "2023-10-03T08:24:25+00:00"
      },
      {
        "id": 159,
        "image": "http://faceids.tadi.uz/uploads/2023/11/07/face_event/082424_face_thumbnail_yckjhZ.jpg",
        "full_name": "Azimov Shohruh",
        "create_date": "2023-10-03T08:24:24+00:00"
      },
      {
        "id": 157,
        "image": "http://faceids.tadi.uz/uploads/2023/11/07/face_event/082231_face_thumbnail_EmVDuo.jpg",
        "full_name": "Sharofiddin",
        "create_date": "2023-10-03T08:22:28+00:00"
      },
      {
        "id": 157,
        "image": "http://faceids.tadi.uz/uploads/2023/11/07/face_event/082228_face_thumbnail_jDiTmA.jpg",
        "full_name": "Sharofiddin",
        "create_date": "2023-10-03T08:22:28+00:00"
      },
      {
        "id": 157,
        "image": "http://faceids.tadi.uz/uploads/2023/11/07/face_event/082226_face_thumbnail_u5wCHf.jpg",
        "full_name": "Sharofiddin",
        "create_date": "2023-10-03T08:22:25+00:00"
      },
      {
        "id": 157,
        "image": "http://faceids.tadi.uz/uploads/2023/11/07/face_event/082225_face_thumbnail_AJp8Eg.jpg",
        "full_name": "Sharofiddin",
        "create_date": "2023-10-03T08:22:25+00:00"
      },
      {
        "id": 157,
        "image": "http://faceids.tadi.uz/uploads/2023/11/07/face_event/082224_face_thumbnail_K8hVmZ.jpg",
        "full_name": "Sharofiddin",
        "create_date": "2023-10-03T08:22:23+00:00"
      },
      {
        "id": 159,
        "image": "http://faceids.tadi.uz/uploads/2023/11/07/face_event/040026_face_thumbnail_yJeDin.jpg",
        "full_name": "Azimov Shohruh",
        "create_date": "2023-10-03T04:00:24+00:00"
      },
      {
        "id": 159,
        "image": "http://faceids.tadi.uz/uploads/2023/11/07/face_event/040024_face_thumbnail_neuLYR.jpg",
        "full_name": "Azimov Shohruh",
        "create_date": "2023-10-03T04:00:24+00:00"
      },
      {
        "id": 157,
        "image": "http://faceids.tadi.uz/uploads/2023/11/07/face_event/035425_face_thumbnail_DbSKX8.jpg",
        "full_name": "Sharofiddin",
        "create_date": "2023-10-03T03:54:23+00:00"
      },
      {
        "id": 157,
        "image": "http://faceids.tadi.uz/uploads/2023/11/07/face_event/035424_face_thumbnail_YdL253.jpg",
        "full_name": "Sharofiddin",
        "create_date": "2023-10-03T03:54:23+00:00"
      },
      {
        "id": 3,
        "image": "http://faceids.tadi.uz/uploads/2023/11/07/face_event/033438_face_thumbnail_YJuIwp.jpg",
        "full_name": "Erkin Narmetov",
        "create_date": "2023-10-03T03:34:37+00:00"
      },

      {
        "id": 159,
        "image": "http://faceids.tadi.uz/uploads/2023/11/07/face_event/130030_face_thumbnail_TdrhiQ.jpg",
        "full_name": "Azimov Shohruh",
        "create_date": "2023-10-015T13:00:28+00:00"
      },
      {
        "id": 159,
        "image": "http://faceids.tadi.uz/uploads/2023/11/07/face_event/130028_face_thumbnail_9v8KJI.jpg",
        "full_name": "Azimov Shohruh",
        "create_date": "2023-10-015T13:00:28+00:00"
      },
      {
        "id": 55,
        "image": "http://faceids.tadi.uz/uploads/2023/11/07/face_event/084224_face_thumbnail_oUS8CK.jpg",
        "full_name": "Alijon Abdurasulov",
        "create_date": "2023-10-015T08:42:23+00:00"
      },
      {
        "id": 159,
        "image": "http://faceids.tadi.uz/uploads/2023/11/07/face_event/082429_face_thumbnail_vQZIuR.jpg",
        "full_name": "Azimov Shohruh",
        "create_date": "2023-10-015T08:24:25+00:00"
      },
      {
        "id": 159,
        "image": "http://faceids.tadi.uz/uploads/2023/11/07/face_event/082425_face_thumbnail_Cojm5v.jpg",
        "full_name": "Azimov Shohruh",
        "create_date": "2023-10-015T08:24:25+00:00"
      },
      {
        "id": 159,
        "image": "http://faceids.tadi.uz/uploads/2023/11/07/face_event/082424_face_thumbnail_yckjhZ.jpg",
        "full_name": "Azimov Shohruh",
        "create_date": "2023-10-015T08:24:24+00:00"
      },
      {
        "id": 157,
        "image": "http://faceids.tadi.uz/uploads/2023/11/07/face_event/082231_face_thumbnail_EmVDuo.jpg",
        "full_name": "Sharofiddin",
        "create_date": "2023-10-015T08:22:28+00:00"
      },
      {
        "id": 157,
        "image": "http://faceids.tadi.uz/uploads/2023/11/07/face_event/082228_face_thumbnail_jDiTmA.jpg",
        "full_name": "Sharofiddin",
        "create_date": "2023-10-015T08:22:28+00:00"
      },
      {
        "id": 157,
        "image": "http://faceids.tadi.uz/uploads/2023/11/07/face_event/082226_face_thumbnail_u5wCHf.jpg",
        "full_name": "Sharofiddin",
        "create_date": "2023-10-015T08:22:25+00:00"
      },
      {
        "id": 157,
        "image": "http://faceids.tadi.uz/uploads/2023/11/07/face_event/082225_face_thumbnail_AJp8Eg.jpg",
        "full_name": "Sharofiddin",
        "create_date": "2023-10-015T08:22:25+00:00"
      },
      {
        "id": 157,
        "image": "http://faceids.tadi.uz/uploads/2023/11/07/face_event/082224_face_thumbnail_K8hVmZ.jpg",
        "full_name": "Sharofiddin",
        "create_date": "2023-10-015T08:22:23+00:00"
      },
      {
        "id": 159,
        "image": "http://faceids.tadi.uz/uploads/2023/11/07/face_event/040026_face_thumbnail_yJeDin.jpg",
        "full_name": "Azimov Shohruh",
        "create_date": "2023-10-015T04:00:24+00:00"
      },
      {
        "id": 159,
        "image": "http://faceids.tadi.uz/uploads/2023/11/07/face_event/040024_face_thumbnail_neuLYR.jpg",
        "full_name": "Azimov Shohruh",
        "create_date": "2023-10-015T04:00:24+00:00"
      },
      {
        "id": 157,
        "image": "http://faceids.tadi.uz/uploads/2023/11/07/face_event/035425_face_thumbnail_DbSKX8.jpg",
        "full_name": "Sharofiddin",
        "create_date": "2023-10-015T03:54:23+00:00"
      },
      {
        "id": 157,
        "image": "http://faceids.tadi.uz/uploads/2023/11/07/face_event/035424_face_thumbnail_YdL253.jpg",
        "full_name": "Sharofiddin",
        "create_date": "2023-10-015T03:54:23+00:00"
      },
      {
        "id": 3,
        "image": "http://faceids.tadi.uz/uploads/2023/11/07/face_event/033438_face_thumbnail_YJuIwp.jpg",
        "full_name": "Erkin Narmetov",
        "create_date": "2023-10-015T03:34:37+00:00"
      },

      {
        "id": 159,
        "image": "http://faceids.tadi.uz/uploads/2023/11/07/face_event/130030_face_thumbnail_TdrhiQ.jpg",
        "full_name": "Azimov Shohruh",
        "create_date": "2023-10-15T13:00:28+00:00"
      },
      {
        "id": 159,
        "image": "http://faceids.tadi.uz/uploads/2023/11/07/face_event/130028_face_thumbnail_9v8KJI.jpg",
        "full_name": "Azimov Shohruh",
        "create_date": "2023-10-15T13:00:28+00:00"
      },
      {
        "id": 55,
        "image": "http://faceids.tadi.uz/uploads/2023/11/07/face_event/084224_face_thumbnail_oUS8CK.jpg",
        "full_name": "Alijon Abdurasulov",
        "create_date": "2023-10-15T08:42:23+00:00"
      },
      {
        "id": 159,
        "image": "http://faceids.tadi.uz/uploads/2023/11/07/face_event/082429_face_thumbnail_vQZIuR.jpg",
        "full_name": "Azimov Shohruh",
        "create_date": "2023-10-15T08:24:25+00:00"
      },
      {
        "id": 159,
        "image": "http://faceids.tadi.uz/uploads/2023/11/07/face_event/082425_face_thumbnail_Cojm5v.jpg",
        "full_name": "Azimov Shohruh",
        "create_date": "2023-10-15T08:24:25+00:00"
      },
      {
        "id": 159,
        "image": "http://faceids.tadi.uz/uploads/2023/11/07/face_event/082424_face_thumbnail_yckjhZ.jpg",
        "full_name": "Azimov Shohruh",
        "create_date": "2023-10-15T08:24:24+00:00"
      },
      {
        "id": 157,
        "image": "http://faceids.tadi.uz/uploads/2023/11/07/face_event/082231_face_thumbnail_EmVDuo.jpg",
        "full_name": "Sharofiddin",
        "create_date": "2023-10-15T08:22:28+00:00"
      },
      {
        "id": 157,
        "image": "http://faceids.tadi.uz/uploads/2023/11/07/face_event/082228_face_thumbnail_jDiTmA.jpg",
        "full_name": "Sharofiddin",
        "create_date": "2023-10-15T08:22:28+00:00"
      },
      {
        "id": 157,
        "image": "http://faceids.tadi.uz/uploads/2023/11/07/face_event/082226_face_thumbnail_u5wCHf.jpg",
        "full_name": "Sharofiddin",
        "create_date": "2023-10-15T08:22:25+00:00"
      },
      {
        "id": 157,
        "image": "http://faceids.tadi.uz/uploads/2023/11/07/face_event/082225_face_thumbnail_AJp8Eg.jpg",
        "full_name": "Sharofiddin",
        "create_date": "2023-10-15T08:22:25+00:00"
      },
      {
        "id": 157,
        "image": "http://faceids.tadi.uz/uploads/2023/11/07/face_event/082224_face_thumbnail_K8hVmZ.jpg",
        "full_name": "Sharofiddin",
        "create_date": "2023-10-15T08:22:23+00:00"
      },
      {
        "id": 159,
        "image": "http://faceids.tadi.uz/uploads/2023/11/07/face_event/040026_face_thumbnail_yJeDin.jpg",
        "full_name": "Azimov Shohruh",
        "create_date": "2023-10-15T04:00:24+00:00"
      },
      {
        "id": 159,
        "image": "http://faceids.tadi.uz/uploads/2023/11/07/face_event/040024_face_thumbnail_neuLYR.jpg",
        "full_name": "Azimov Shohruh",
        "create_date": "2023-10-15T04:00:24+00:00"
      },
      {
        "id": 157,
        "image": "http://faceids.tadi.uz/uploads/2023/11/07/face_event/035425_face_thumbnail_DbSKX8.jpg",
        "full_name": "Sharofiddin",
        "create_date": "2023-10-15T03:54:23+00:00"
      },
      {
        "id": 157,
        "image": "http://faceids.tadi.uz/uploads/2023/11/07/face_event/035424_face_thumbnail_YdL253.jpg",
        "full_name": "Sharofiddin",
        "create_date": "2023-10-15T03:54:23+00:00"
      },
      {
        "id": 3,
        "image": "http://faceids.tadi.uz/uploads/2023/11/07/face_event/033438_face_thumbnail_YJuIwp.jpg",
        "full_name": "Erkin Narmetov",
        "create_date": "2023-10-15T03:34:37+00:00"
      }
    ]

      const onChangeDate = (event) => {
        setSelectedDate(event.target.value);
        fetchData();
      };
      const fetchData = async () => {
        try {
          // const response = await axios.get(`https://mycorse.onrender.com/https://www.workers.yomon-emas.uz/api/workers_with_database/?create_date_gt=${fetchYear}-${fetchMonth}-01T18%3A59
          // %3A00.999Z&create_date_lt=${fetchYear}-${fetchMonth}-${fetchDayIMonths}T18%3A59%3A00.999Z`);
          setUser(data)
        } catch (error) {
          console.error(error);
        }
      };
      const uniqueIds = [...new Set(user?.map(item => item.id))];
      const duplicateItems = uniqueIds.map(id => {
        return user.filter(item => item.id === id);
      });

      useEffect(() => {
        fetchData()
      }, [])

const generateTable = () => {
  const dateObj = new Date(selectedDate);
  const month = dateObj.getMonth() + 1;
  const year = dateObj.getFullYear();

  const daysInMonth = new Date(year, month, 0).getDate();
  const tableHeaders = [];
  const tableRows = [];

  duplicateItems?.map((item, index) => {
    const rowCells = [];
    for (let i = 1; i <= daysInMonth; i++) {
      let test = [];
      item?.map((e) => {
        const date = new Date(e?.create_date);
        const day = date.getDate();
        const monthOfYear = date.getMonth() + 1;
        const fullYear = date.getFullYear();
        const formattedDate = `${day}/${monthOfYear}/${fullYear}`;
      
        const selectDate = `${i}/${month}/${year}`;
        if (selectDate === formattedDate) {
          test.push(e);
        }
      });
      rowCells.push(
        <td className='tablesItem' key={i}>
          <span className='comeTimes'>{new Date(test[test.length - 1]?.create_date).toLocaleTimeString('uz-UZ', { timeStyle: 'short' }) === 'Invalid Date' ? '' : new Date(test[test.length - 1]?.create_date).toLocaleTimeString('uz-UZ', { timeStyle: 'short' })}</span>

          <span className='wentTimes'>{new Date(test[0]?.create_date).toLocaleTimeString('uz-UZ', { timeStyle: 'short' }) === 'Invalid Date' ? '' : new Date(test[0]?.create_date).toLocaleTimeString('uz-UZ', { timeStyle: 'short' })}</span>
        </td>
      ); 
    }
    tableRows.push(
      <tr className="userTables" key={item[0]?.id}>
        <th><p>{index + 1}</p></th>
        <td style={{ textAlign: 'center' }}>
          <img className="userImg" src={item[0]?.image} width='50' height='50' alt='agressiyaImg' />
        </td>
        <td><p>{item[0]?.full_name}</p></td>
        {rowCells}
        <td className='userTables_all'><p>123</p></td>
      </tr>
    );
  });

  for (let i = 1; i <= daysInMonth; i++) {
    tableHeaders.push(<th key={i}>{i}</th>);
  }

  return (
    <table style={{ overflowX: 'auto' }} className='table table-bordered table-hover'>
      <thead className='mycomponent_head'>
        <tr style={{ textAlign: 'center', position: 'sticky', top: 0 }}>
          <th className='agressiyaModal_heading'>#</th>
          <th className='agressiyaModal_heading'>Фото</th>
          <th style={{ minWidth: '300px' }} className='agressiyaModal_heading'>Фамилия и имя</th>
          {tableHeaders}
          <th className='agressiyaModal_heading agressiyaModal_heading1'>Всего</th>
        </tr>
      </thead>  
      <tbody>
        {tableRows}
      </tbody>
    </table>
  );
};
  return (
    <div>
      <div className='dateHeader'>
        <input className='dateInput' type="date" value={selectedDate} onChange={onChangeDate} />
      </div>
      {selectedDate && (<div style={{ overflowX: 'auto' }}>
        {generateTable()}
      </div>)}
    </div>
  );
}

export default MyComponent;