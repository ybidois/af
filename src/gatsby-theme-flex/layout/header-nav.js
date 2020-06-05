/** @jsx jsx */
import { jsx } from "theme-ui";
import Link from "gatsby-theme-flex/src/components/link";
import PropTypes from "prop-types";

const HeaderNav = ({ links }) => {
  return (
    links && (
      <nav>
        <ul
          sx={{
            margin: 0,
            marginTop: [4, 0],
            marginRight: [4],
            padding: 0,
            listStyle: `none outside none`,
            display: `flex`,
            flexDirection: [`column`, `row`],
            justifyContent: ["none", "space-evenly"],
            width: [`100%`, `auto`],
          }}
        >
          {links.map(({ title, path }) => (
            <li
              key={title}
              sx={{
                marginLeft: [0, 6],
                marginTop: [1, 0],
                marginBottom: [2, 0],
              }}
            >
              <Link
                to={path}
                style={{
                  textDecoration: `none`,
                  color: `black2`,
                  fontSize: 1,
                  // textTransform: `uppercase`,
                  letterSpacing: 1,
                  textAlign: `center`,
                  display: `block`,
                  "&:hover": {
                    color: `primary`,
                    textDecoration: "underline",
                    // borderStyle: "dotted",
                  },
                  "&.active": {
                    color: `primary`,
                    fontWeight: `bold`,
                    // textDecoration: "underline dotted",
                  },
                }}
              >
                {title}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    )
  );
};

HeaderNav.propTypes = {
  links: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      path: PropTypes.string.isRequired,
    })
  ),
};

export default HeaderNav;
