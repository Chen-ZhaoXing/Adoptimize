import React, { useState, useMemo } from 'react';
import { Badge, Drawer, Image, List, Space, Typography, Dropdown, Button, Divider, notification } from "antd";
import Personal from "../components/prescreening/Personal"
import Lifestyle from "../components/prescreening/Lifestyle"
import Homebased from "../components/prescreening/Homebased"
import Household from "../components/prescreening/Household"


const  AdoptionForm = () => {

  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [catKnowledge, setCatKnowledge] = useState('');
  const [householdSize, setHouseholdSize] = useState('');
  const [householdType, setHouseholdType] = useState('');
  const [residenceType, setResidenceType] = useState('');
  const [catExperience, setCatExperience] = useState('');
  const [catActivityLevel, setCatActivityLevel] = useState('');
  const [catBreedPreference, setCatBreedPreference] = useState('');
  const [catPersonalityPreference, setCatPersonalityPreference] = useState('');
  const [catLitterPreference, setCatLitterPreference] = useState('');
  const [catFoodPreference, setCatFoodPreference] = useState('');
  const [otherPets, setOtherPets] = useState('');
  const [vetInfo, setVetInfo] = useState('');
  const [petType, setPetType] = useState('');
  const [yard, setYard] = useState('');
  const [reason, setReason] = useState('');


  const handleSubmit = (event) => {
  event.preventDefault();
  console.log({
    name,
    age,
    email,
    phone,
    catKnowledge,
    householdSize,
    householdType,
    residenceType,
    catExperience,
    catActivityLevel,
    catBreedPreference,
    catPersonalityPreference,
    catLitterPreference,
    catFoodPreference,
    otherPets,
    vetInfo,
    });
    // Submit form data to backend here
  };


  const [api, contextHolder] = notification.useNotification();
  const openNotificationWithIcon = (type) => {
    api[type]({
      message: 'Adoption Application Submitted!',
      description:
        'Do check your email for updates from us :) thank you!',
    });
  };

  return (
    <>
      <div className="AppHeader bg-white">
        <div>
          <Image
            width={150}
            src={require("./Adoptimize.png")}
            alt="AdoptimizeLogo"
            className="mt-5"
          ></Image>
          <Image
            width={150}
            src={require("./Shelter.png")}
            alt="Logo"
            className="mt-5"
          ></Image>
        </div>
      </div>

      <div className="bg-[#F5F5F9] h-96">
        <Space direction="vertical table">
          <Typography.Title
            // level={10}
            className="font-nunito font-bold font-8xl mt-5 ml-20"
          >
            Adoption Application for BELLA
          </Typography.Title>
          <form className="p-4 mx-12 bg-blue font-nunito" onSubmit={handleSubmit}>
            <Personal/>
            <Lifestyle/>
            <Homebased/>
            <Household/>
          </form>
          {/* <Context.Provider value={contextValue}> */}
            {contextHolder}
            <Button block
              type="button"
              className="text-white bg-[#F7AF7A] hover:bg-white hover:text-[#F7AF7A] font-medium rounded-lg text-sm px-5 py-2.5 ml-16 mb-2 font-nunito"
              type="primary" onClick={() => openNotificationWithIcon('success')} >
              Submit Adoption Application
            </Button>
        {/* </Context.Provider> */}
        </Space>
      </div>
      


      


        





    </>
  );
};

export default AdoptionForm;
