import Card from "react-bootstrap/Card";
import { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import "./Header.css";
import HeroModal from "./HeroModal/HeroModal";

function Header() {
  const [profileData, setProfileData] = useState(null);
  const [modalShow, setModalShow] = useState(false);

  useEffect(() => {
    fetch("https://striveschool-api.herokuapp.com/api/profile/me", {
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWFlODY4OWJkNWQxMjAwMTg5MGQzMTciLCJpYXQiOjE3MDU5MzY1MjIsImV4cCI6MTcwNzE0NjEyMn0.fmE6SUvSTdESNcTaxOhKxVPs2YKwDAdE7bIXyveOMkk",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setProfileData(data);
        console.log(data);
      });
  }, []);

  return (
    <>
      {profileData && (
        <Card style={{ width: "36rem" }}>
          <div className="profile-container">
            <Card.Img
              variant="top"
              src="https://i.natgeofe.com/n/548467d8-c5f1-4551-9f58-6817a8d2c45e/NationalGeographic_2572187.jpg"
            />
            <div className="propic-absolute">
              <img
                style={{ width: "100px" }}
                src="https://i.natgeofe.com/n/548467d8-c5f1-4551-9f58-6817a8d2c45e/NationalGeographic_2572187.jpg"
              />
            </div>
          </div>
          <Card.Body>
            <div className="hero-info">
              <div>
                <h1>{`${profileData.name} ${profileData.surname}`}</h1>
                <p>{profileData.title}</p>

                <address>{profileData.area}</address>
                <a href="#">Contact info</a>
                <div>
                  <Button>Open to</Button>
                  <Button>Add profile section</Button>
                  <Button>More</Button>
                </div>
              </div>
              <div>
                <Button onClick={() => {setModalShow(true)}}>Apri il modale</Button>
                <HeroModal
                    user={profileData}
                  pepe={modalShow}
                  onHide={() => {
                    setModalShow(false);
                  }}
                />
                <p>Consulente</p>
              </div>
            </div>
          </Card.Body>
        </Card>
      )}
    </>
  );
}

export default Header;
