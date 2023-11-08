  import axios from "axios";
  import { useEffect, useState } from "react";
  import './comeWork.css'
  import * as XLSX from 'xlsx';
  import usersLogo from '../../Image/photo_people.jpg'

  function ComeWork() {
    const today = new Date();
    const formattedDate = today.toISOString().split('T')[0];

    const [day, setDay] = useState(formattedDate);
  const [user, setUser] = useState([])
  const [time1, setTime1] = useState('09:00')
  const [time2, setTime2] = useState('23:59')

  const [hour01, minute01] = time1.split(':').map(Number);
  const [hour02, minute02] = time2.split(':').map(Number);


  const minutesToAdd = 5 * 60;

  const totalMinutes1 = hour01 * 60 + minute01 - minutesToAdd;
  const totalMinutes2 = hour02 * 60 + minute02 - minutesToAdd;

  const formatTime = (time) => {
    const hours = Math.floor(time / 60);
    const minutes = time % 60;
    const formattedHours = hours.toString().padStart(2, '0');
    const formattedMinutes = minutes.toString().padStart(2, '0');
    return `${formattedHours}:${formattedMinutes}`;
  };

  const time01 = formatTime(totalMinutes1);
  const time02 = formatTime(totalMinutes2);

  const [hour1, minute1] = time01?.split(':');
  const [hour2, minute2] = time02?.split(':');

  useEffect(() => {
    fetchData();
  }, []);

  const handleSend = () => {
    fetchData();
  };

  const fetchData = async () => {
    try {
      const response = await axios.get(`https://mycorse.onrender.com/https://www.workers.yomon-emas.uz/api/workers/workers/?create_date_gt=${day}T${hour1}%3A${minute1}%3A00.999Z&create_date_lt=${day}T${hour2}%3A${minute2}%3A00.999Z`);
      setUser(response.data)
    } catch (error) {
      console.error(error);
    }
  };

  const uniqueIds = [...new Set(user.map(item => item.id))];

  const duplicateItems = uniqueIds.map(id => {
    return user.filter(item => item.id === id);
  });
    
  const saveAsExcelFile = (users, fileName) => {
    const header = ['full_name', 'date', 'time'];
    const worksheetData = [header, ...users.map(user => [
      user?.full_name,  
      new Date(user?.create_date).toLocaleDateString('uz-UZ'),
      new Date(user?.create_date).toLocaleTimeString('uz-UZ', { timeStyle: 'short' })
    ])];
    
    const worksheet = XLSX.utils.aoa_to_sheet(worksheetData);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, 'Sheet1');
    XLSX.writeFile(workbook, fileName);
  };

  const handleSave = () => {
    saveAsExcelFile(user, 'user.xlsx');
  };

  const onChangeTime1 = (event) => {
      if (event?.target?.value !== '') {
        setTime1(event?.target?.value)
      } else {
        setTime1('04:00')
      }
  }

  const onChangeTime2 = (event) => {
    if (event?.target?.value !== '') {
      setTime2(event?.target?.value)
    } else {
      setTime2('18:50')
    }
  }

  const onChangeDay = (event) => {
    if (event?.target?.value !== '') {
      setDay(event?.target?.value)
    }
  }

    return (
      <div className="app">
        <div>
          <div className="app_inner">
    <div className="user_table">
    <table className="table table-striped table-hover" id="myTable">
      <thead>
        <tr>
          <th className='agressiyaModal_heading' scope="col">#</th>
          <th className='agressiyaModal_heading' scope="col">Фото</th>
          <th className='agressiyaModal_heading' scope="col">Фамилия и имя</th>
          <th className='agressiyaModal_heading' scope="col">Пришел</th>
          <th className='agressiyaModal_heading' scope="col">Ушел</th>
        </tr>
      </thead>
      <tbody>
      {duplicateItems?.map((item, index) => (
    <tr className="userTables" key={index}>
      <th>{index + 1}</th>
      <td><img className="userImg" src={(item[0]?.image.split('').reverse().slice(0,3).reverse().join('') === 'jpg') ? item[0]?.image : usersLogo} width='50' height='50' alt='agressiyaImg' /></td>
      <td><p>{item[0]?.full_name}</p></td>
      <td><p>{new Date(item[item?.length - 1]?.create_date).toLocaleTimeString('uz-UZ', { timeStyle: 'short' })}</p></td>
      <td><p>{new Date(item[0]?.create_date).toLocaleTimeString('uz-UZ', { timeStyle: 'short' })}</p></td>

    </tr>
  ))}
      </tbody>
    </table>
    </div>

            <div className="filtered">

              <div className='input_box'>
                <p>фильтровать по времени</p>
                <div className="times_filter">
                  <div className="time1">
                    <input className="form-control timeFilter_day" value={time1} onChange={onChangeTime1} type="time" list="datalistOptions" id="time1" />
                  </div>
                  <span>-</span>
                  <div className="time1">
                    <input className="form-control timeFilter_day" value={time2} onChange={onChangeTime2} type="time" list="datalistOptions" id="time2" />
                  </div>
                </div>
              </div>


              <div className="input_box">
                <p>сортировать по месяцам</p>
                <div className="times_filter">
                  <div className="time1">
                    <input className="form-control timeFilter_day" value={day} onChange={onChangeDay} type="date" list="datalistOptions" id="month2" />
                  </div>
                </div>
              </div>
              <button onClick={handleSend} className="save_button">Send</button>


              <button onClick={handleSave} className="save_button save_button1">Save</button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  export default ComeWork;
