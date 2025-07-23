import Sidebar from "../Sidebar";
import { useTheme } from "styled-components";
import {
  NotFoundFlexContainer,
  NotFoundContainer,
  NotFoundImage,
  NotFoundDescp,
  NotFoundHeading,
} from "./StyledComponents";

const NotFound = () => {
  const theme = useTheme();
  return (
    <>
      <NotFoundFlexContainer className="flex-container-notfound">
        <Sidebar />
        <NotFoundContainer>
          <NotFoundImage src={theme.notFoundImage} />
          <NotFoundHeading>Page Not Found</NotFoundHeading>
          <NotFoundDescp>
            We're sorry, the page you requested could not be found.
          </NotFoundDescp>
        </NotFoundContainer>
      </NotFoundFlexContainer>
    </>
  );
};

export default NotFound;
