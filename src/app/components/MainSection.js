import { Button, Menu } from "@mantine/core";
import "../styles.css";
const triangleStyle = {
  width: 0,
  height: 0,
  borderLeft: "10px solid transparent",
  borderRight: "10px solid transparent",
  borderBottom: "15px solid #ff5a5a", 
  marginRight: "8px", 
};

const buttonStyle = {
  border: "2px solid #ff5a5a", 
  color: "black",
  padding: "10px 20px",
  display: "flex",
  alignItems: "center",
  gap: "8px",
  minWidth: "150px", 
};

const visitButtonStyle = {
  border: "1px solid #ccc",
  color: "#4a5568", 
  padding: "10px 20px",
  display: "flex",
  alignItems: "center",
  gap: "8px",
  backgroundColor: "#fff",
};

const MainSection = () => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 md:p-8 max-w-3xl mx-auto">
      <div className="flex flex-col  mb-4">
        <img
          src="https://ph-files.imgix.net/3153ed76-d013-4a2b-a7ac-f2f4cbfc3cc4.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=72&h=72&fit=crop&dpr=1"
          alt="Lip Icon"
          className="w-16 h-16 rounded-full ml-32 mb-4"
        />
        <h1 className="text-2xl font-bold text-gray-800 text-center">
          VideoDubber - Fast Video Translator
        </h1>
      </div>
      <p className="text-24 font-light text-gray styles_tagline__svEiR text-center mb-6">
        Translate videos in your own voice, globalize in a click!
      </p>
      <div className="flex justify-end space-x-4">
        <Menu>
          <Menu.Target>
            <Button style={visitButtonStyle}>Visit</Button>
          </Menu.Target>
          <Menu.Dropdown>
            <Menu.Item>Visit</Menu.Item>
          </Menu.Dropdown>
        </Menu>
        <Button style={buttonStyle} variant="outline">
          <div style={triangleStyle}></div>
          UPVOTED 129
        </Button>
      </div>
    </div>
  );
};

export default MainSection;
