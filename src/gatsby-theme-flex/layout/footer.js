/** @jsx jsx */
import { jsx, Flex, Container } from "theme-ui";
import PropTypes from "prop-types";
import FooterNav from "./footer-nav";

const Footer = ({ copyright, footerLinks }) => {
  return (
    <footer>
      <Container>
        <Flex
          sx={{
            py: [4],
            flexDirection: [`column-reverse`],
            justifyContent: `space-between`,
            alignItems: [`center`],
          }}
        >
          {copyright && (
            <p
              sx={{
                variant: `text.copyright`,
              }}
            >
              {copyright.replace(/(Y{4})/, new Date().getFullYear())}
            </p>
          )}
          <FooterNav links={footerLinks} />
        </Flex>
      </Container>
    </footer>
  );
};

Footer.propTypes = {
  copyright: PropTypes.string,
  footerLinks: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      path: PropTypes.string.isRequired,
    })
  ),
};

export default Footer;
