import Card from "react-bootstrap/Card";
import { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import "./Header.css";
import HeroModal from "./HeroModal/HeroModal";
import Form from "react-bootstrap/Form";
import * as Icon from "react-bootstrap-icons";
import ImageUpload from "./HeroModal/ImageUpload/ImageUpload";

function Header() {
  const [profileData, setProfileData] = useState(null);
  const [modalShow, setModalShow] = useState(false);
  const [upload, setUpload] = useState(false);

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
      })
  }, []);

  return (
    <>
      {profileData && (
        <Card style={{ width: "36rem" }}>
          <div className="profile-container">
            <Card.Img variant="top" src={profileData.image} />
            <div className="propic-absolute">
              <img style={{ width: "100px" }} src={profileData.image} />
              <Icon.Upload
                size={18}
                className="upload-icon"
                onClick={() => setUpload(true)}
              />
            </div>
          </div>
          {upload && (
            <HeroModal
              user={profileData}
              show={upload}
              type={"upload"}
              onHide={() => {
                setUpload(false);
              }}
            />
          )}

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
                <Button
                  onClick={() => {
                    setModalShow(true);
                  }}
                >
                  Apri il modale
                </Button>
                <HeroModal
                  user={profileData}
                  show={modalShow}
                  type={"profile"}
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
