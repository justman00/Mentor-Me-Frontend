import React, { useEffect } from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import { fetchProfile, unmountAction } from "../../actions";
import Loader from "react-loader-spinner";
import { Link } from "react-router-dom";
import { UNMOUNT_PROFILE } from "../../actions/types";
//styles
// const StyledProfile = styled.div`
//   /* display: flex;
//   width: 100%;
//   flex-direction: column;
//   font-size: 2rem;
//   background-color: white; */
// `;
//loader style
const Load = styled.div`
  text-align: center;
  margin-top: 50%;
`;
// const Head = styled.div`
//   /* background: red;
//   background-image: url(${props => props.photo});
//   object-fit: cover;
//   position: relative;
//   width: 100%;
//   margin: 0 auto;
//   text-align: center;
//   z-index: 99;
//   border-bottom: solid white 30px; */
// `;
const Img = styled.img`
  height: 45%;
  width: 45%;
  border-radius: 15px;
`;
const H1 = styled.h1`
  /* font-size: 4rem;
  margin-top: 17%;
  margin-bottom: 17%;
  font-family: Courgette;
  color: #bcc5d3;
  text-shadow: 3px 3px #2b2f3b;
  font-weight: bold;
  -webkit-text-stroke: 1px black; */
`;
const P = styled.p`
  /* padding: 3% 3% 0% 50%;
  margin-bottom: -3%;
  font-family: Courgette;
  font-size: 2em;
  color: #bcc5d3;
  text-shadow: 3px 3px #2b2f3b;
  font-weight: bold;
  -webkit-text-stroke: 1px black; */
`;
const H3 = styled.h3`
  font-size: 2.4rem;
  font-weight: 550;
  letter-spacing: 3px;
  padding-bottom: 0.6rem;
  border-bottom: 5px solid #5574f7;
  width: 25%;
`;
const Title = styled.div`
  /* text-align: center;
  margin-top: 20%;
  font-weight: bold;
  text-align: left;
  padding-left: 20px; */
`;
const P2 = styled.p`
  margin-top: 5%;
  font-size: 1.6rem;
  line-height: 1.45;
`;
const Tab = styled.div`
  display: flex;
  width: 90%;
  margin: 5% auto 0;
  justify-content: space-between;
`;
const About = styled.div`
  width: 90%;
  margin: 5% auto 0;
  color: #4c5264;
`;
const Edit = styled.div`
  align-self: center;
  font-size: 1.8rem;

  cursor: pointer;
  border-bottom: 3px solid black;
  padding-bottom: 5px;

  a {
    text-decoration: none;
  }
`;

const StyledProfile = styled.div``;

const Head = styled.div`
  position: relative;
  width: 100%;
  background-image: linear-gradient(to left, #60c3ff, #5574f7);
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  h1 {
    text-align: center;
    font-size: 3rem;
    color: #fff;
    font-weight: 550;
    letter-spacing: 5px;
    margin: 10% 0 0;
  }

  p {
    color: lightgray;
    font-size: 1.4rem;
    margin: 3% 0 10%;
    font-weight: 500;
    letter-spacing: 5px;
  }
`;

function Profile({ profile, match, fetchProfile, currentId, unmountAction }) {
  console.log(profile);
  useEffect(() => {
    fetchProfile(match.params.id);

    return () => {
      unmountAction(UNMOUNT_PROFILE);
    };
  }, [match.params.id]);
  function displayEdit() {
    if (match.params.id + "" === currentId + "") {
      return (
        <Edit>
          <Link to={`/edit/profile/${currentId}`}>Edit Profile</Link>
        </Edit>
      );
    }
  }
  // loading
  if (!profile) {
    return (
      <Load>
        <Loader type="TailSpin" color="#5887F9" height="100" width="100" />
      </Load>
    );
  }

  return (
    <StyledProfile>
      <Head photo={profile.photo}>
        <H1>{profile.name}</H1>

        <P>{profile.role}</P>
      </Head>

      <Tab>
        <Img src={profile.photo} alt="user" />
        <div>{displayEdit()}</div>
      </Tab>
      <About>
        <H3>About</H3>
        <P2>{profile.about}</P2>
      </About>
    </StyledProfile>
  );
}
const mapStateToProps = state => {
  return {
    profile: state.currentUser.profileToShow,
    currentId: state.currentUser.id
  };
};
export default connect(
  mapStateToProps,
  { fetchProfile, unmountAction }
)(Profile);
