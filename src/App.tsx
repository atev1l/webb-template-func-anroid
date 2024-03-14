import React, { useState, useEffect } from 'react';
import './App.css';

import AvatarEditor from 'react-avatar-editor'
import Avatar from 'react-avatar';

interface btr {
  batteryLevel: number;
}


function App() {
  const [localValue, setLocalValue] = useState<string>('defaultLocal');
  const [sessionValue, setSessionValue] = useState<string>('defaultSes');
  const [nameDeviceBLT, setNameDeviceBLT] = useState<string>('blt');

  const [fileContent, setFileContent] = useState<string>('file ne load');

  // @ts-ignore
  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    const fileList = event.target.files;

    if (!fileList?.[0]) {
      return;
    }

    const reader = new FileReader();

    reader.onload = (event) => {
      const fileContent = event.target?.result?.toString();

      if (fileContent) {
        setFileContent('File loaded');
      }
    };

    reader.readAsText(fileList[0]);
  };

  const [workerApi, setWorkerApi] = useState<string>(() => {
    if (typeof (Worker) !== 'undefined') {
      return('Web Workers are supported!');
    }

    return('Web Workers are not supported in this browser.');
  });
  const [btr, setBtr] = useState<btr>({ batteryLevel: 0 });

  const changeLocal = (add: boolean, key: string, value: string) => {
    if (add) {
      setLocalValue('ADDED');
      window.localStorage.setItem(key, JSON.stringify(value));
    } else {
      setLocalValue('REMOVE');
      window.localStorage.removeItem(key);
    }
  };

  const changeSession = (add: boolean, key: string, value: string) => {
    if (add) {
      setSessionValue('ADDED');
      window.sessionStorage.setItem(key, JSON.stringify(value));
    } else {
      setSessionValue('REMOVE');
      window.sessionStorage.removeItem(key);
    }
  };

  const checkBatteryLevel = async (): Promise<void> => {
    // @ts-ignore
    navigator.getBattery().then((battery: any) => {
      const level = battery.level * 100;

      setBtr({ batteryLevel: level });
    });
  };

  useEffect(() => {
    const localData = window.localStorage.getItem('local');
    const sessionData = window.sessionStorage.getItem('session');

    if (localData) {
      setLocalValue(JSON.parse(localData));
    }

    if (sessionData) {
      setSessionValue(JSON.parse(sessionData));
    }
  }, []);

  console.info('реанимация ');

  const checkBlue = () => {
    if ('bluetooth' in navigator) {
      console.info('Web Bluetooth API поддерживается в этом браузере');

      // @ts-ignore
      navigator.bluetooth.requestDevice({
        acceptAllDevices: true
      })
          .then(
              // @ts-ignore
              (device: BluetoothDevice) => {
                setNameDeviceBLT(`Устройство подключено: ${device.name}`);

                return device.gatt?.connect();
              })
          .catch((error: Error) => {
            setNameDeviceBLT('Ошибка при подключении к устройству Bluetooth');
          });
    } else {
      setNameDeviceBLT('Web Bluetooth API не поддерживается в этом браузере');
    }
  };

  const [image, setImage] = useState<any>(null);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];

    if (file) {
      const reader = new FileReader();

      reader.onloadend = () => {
        const imageDataUrl = reader.result as string;

        setImage(imageDataUrl);
      };
      reader.readAsDataURL(file);
    }
  };

  // <div className="App">
  //   <div className="display">
  //     <div className="brdr">
  //       status worker: { workerApi }
  //     </div>
  //     <div className="brdr">
  //       { localValue }
  //       <button onClick={() => changeLocal(true, 'local', 'true')}>Add to local</button>
  //       <button onClick={() => changeLocal(false, 'local', 'false')}>Remove from local</button>
  //     </div>
  //     <div className="brdr">
  //       { sessionValue }
  //       <button onClick={() => changeSession(true, 'session', 'true')}>Add to session</button>
  //       <button onClick={() => changeSession(false, 'session', 'false')}>Remove from session</button>
  //     </div>
  //     11111
  //     <AvatarEditor
  //         image={image}
  //         width={250}
  //         height={250}
  //         border={50}
  //         color={[255, 255, 255, 0.6]} // RGBA
  //         scale={1.2}
  //         rotate={0}
  //     />
  //     <Avatar googleId="118096717852922241760" size="100" round={true} />
  //     <div className="brdr">
  //       <input type="file" accept="image/*" onChange={handleImageChange} capture="user" />
  //       {image && (
  //           <div>
  //             <img src={image} alt="Uploaded" style={{ maxWidth: '100%', maxHeight: '300px' }} />
  //             <p>Image uploaded!</p>
  //           </div>
  //       )}
  //     </div>
  //     <div className="brdr">
  //       { nameDeviceBLT }
  //       <button onClick={() => checkBlue()}>check blt</button>
  //     </div>
  //     <div className="brdr">
  //       <div>{ btr.batteryLevel }</div>
  //       <button onClick={() => checkBatteryLevel()}>check батарейки</button>
  //     </div>
  //
  //     <div className="brdr">
  //       <input type="file" onChange={handleFileChange} />
  //       {fileContent && <div>File Content: {fileContent}</div>}
  //     </div>
  //     <div className="brdr">
  //       audio
  //       <audio controls={true}>
  //         <source src="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3" type="audio/mpeg" />
  //         Your browser does not support the audio element.
  //       </audio>
  //     </div>
  //   </div>
  //
  // </div>
  return (
    <div>
      <div style={{fontSize: '92px'}}>
        EXMAPLE
      </div>
      <div style={{fontSize: '92px'}}>
        EXMAPLE
      </div>
      <div style={{fontSize: '92px'}}>
        EXMAPLE
      </div>
      <div style={{fontSize: '92px'}}>
        EXMAPLE
      </div>
      <div style={{fontSize: '92px'}}>
        EXMAPLE
      </div>
      <div style={{fontSize: '92px'}}>
        EXMAPLE
      </div>
      <div style={{fontSize: '92px'}}>
        EXMAPLE
      </div>
      <div style={{fontSize: '92px'}}>
        EXMAPLE
      </div>
      <div style={{fontSize: '92px'}}>
        EXMAPLE
      </div>
      <div style={{fontSize: '92px'}}>
        EXMAPLE
      </div>
      <div style={{fontSize: '92px'}}>
        EXMAPLE
      </div>
      <div style={{fontSize: '92px'}}>
        EXMAPLE
      </div>
      <div style={{fontSize: '92px'}}>
        EXMAPLE
      </div>
      <div style={{fontSize: '92px'}}>
        EXMAPLE
      </div>
      <div style={{fontSize: '92px'}}>
        EXMAPLE
      </div>
      <div style={{fontSize: '92px'}}>
        EXMAPLE
      </div>
      <div style={{fontSize: '92px'}}>
        EXMAPLE
      </div>
      <div style={{fontSize: '92px'}}>
        EXMAPLE
      </div>
      <div style={{fontSize: '92px'}}>
        EXMAPLE
      </div>
      <div style={{fontSize: '92px'}}>
        EXMAPLE
      </div>
      <div style={{fontSize: '92px'}}>
        EXMAPLE
      </div>
      <div style={{fontSize: '92px'}}>
        EXMAPLE
      </div>
      <div style={{fontSize: '92px'}}>
        EXMAPLE
      </div>
      <div style={{fontSize: '92px'}}>
        EXMAPLE
      </div>
      <div style={{fontSize: '92px'}}>
        EXMAPLE
      </div>
      <div style={{fontSize: '92px'}}>
        EXMAPLE
      </div>
      <div style={{fontSize: '92px'}}>
        EXMAPLE
      </div>
      <div style={{fontSize: '92px'}}>
        EXMAPLE
      </div>
      <div style={{fontSize: '92px'}}>
        EXMAPLE
      </div>
      <div style={{fontSize: '92px'}}>
        EXMAPLE
      </div>
      <div style={{fontSize: '92px'}}>
        EXMAPLE
      </div>
    </div>
  );
}

export default App;
