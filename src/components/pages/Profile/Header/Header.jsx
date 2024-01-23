import Card from "react-bootstrap/Card";
import { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import "./Header.css";
import HeroModal from "./HeroModal/HeroModal";
import Form from "react-bootstrap/Form";
import * as Icon from "react-bootstrap-icons";
import ImageUpload from "./HeroModal/ImageUpload/ImageUpload";
import { useDispatch, useSelector } from "react-redux";
import { fetchProfile } from "../../../../redux/actions";

function Header() {
  const [modalShow, setModalShow] = useState(false);
  const [upload, setUpload] = useState(false);
  const dispatch = useDispatch();
  console.log("header render");
  const profileData = useSelector((state) => state.profile);

  useEffect(() => {
    dispatch(fetchProfile());
    console.log("fetch");
  }, []);
  
  return (
    <>
      {
        <Card>
          <div className="profile-container">
            <Card.Img
              className="banner"
              variant="top"
              src={profileData.image}
            />

            <div className="propic-absolute">
              <img className="propic" src={profileData.image} />

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
                <div className="d-flex gap-1">
                  <Button className="fullcolor-button">Open to</Button>
                  <Button className="outlined-button">Add profile section</Button>
                  <button className="white-button">More</button>
                </div>
              </div>
              <div>
                <HeroModal
                  user={profileData}
                  show={modalShow}
                  type={"profile"}
                  onHide={() => {
                    setModalShow(false);
                  }}
                />
                {/* <p>Consulente</p> */}
              </div>
              <Icon.Pencil size={24}
              style={{cursor: "pointer"}}
                  onClick={() => {
                    setModalShow(true);
                  }}
                />

            </div>
          </Card.Body>
        </Card>
      }
    </>
  );
}

export default Header;
