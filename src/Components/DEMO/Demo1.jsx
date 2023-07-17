import React, { useState } from 'react';

function Demo1 ({ initialTheme }){
    const [theme, setTheme] = useState(initialTheme);
  
    const handleThemeChange = () => {
      const newTheme = theme === 'light' ? 'dark' : 'light';
      setTheme(newTheme);
    };
  
    return (
        <div className='text-center'>

      {/* <div className={`app ${theme}`}>
        <h1>Theme Changer</h1>
        <button onClick={handleThemeChange}>Change Theme</button>
        
      </div> */}

        <div className="theme-options">
            <div className="color-switcher">
            <div className="heading">
            <div className="color-list">
                
            </div>
            </div>
            </div>
        </div>
      </div>

    );
  };




export default Demo1;
