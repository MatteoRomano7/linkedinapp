import Card from "react-bootstrap/Card";
import { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import "./Header.css";
import HeroModal from "./HeroModal/HeroModal";
import * as Icon from "react-bootstrap-icons";
import { useDispatch, useSelector } from "react-redux";
import { fetchProfile } from "../../../../redux/actions";

function Header() {
  const [modalShow, setModalShow] = useState(false);
  const [upload, setUpload] = useState(false);
  const [showIcon, setShowIcon] = useState(false)
  const dispatch = useDispatch();
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
              <img className="propic" src={profileData.image} onClick={() => setUpload(true)} onMouseOver={() => {setShowIcon(true)}} onMouseLeave={() => setShowIcon(false)}/>

              {showIcon && (<Icon.Upload
                size={18}
                className="upload-icon"
              />)}
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
                <h2>{`${profileData.name} ${profileData.surname}`}</h2>
                <p>{profileData.title}</p>
                <div className="d-flex gap-4">
                  <address>{profileData.area}</address>

                  <a href="#" style={{textDecoration: "none"}}>Contact info</a>
                </div>
                <div className="d-flex gap-2">
                  <Button className="fullcolor-button">Open to</Button>
                  <Button className="outlined-button">
                    Add profile section
                  </Button>
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
              </div>
              <Icon.Pencil
                size={24}
                style={{ cursor: "pointer" }}
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
