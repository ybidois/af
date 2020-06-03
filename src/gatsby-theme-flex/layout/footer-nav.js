/** @jsx jsx */
import { jsx } from "theme-ui";
import Link from "gatsby-theme-flex/src/components/link";
import PropTypes from "prop-types";

const FooterNav = ({ links }) => {
  return (
    links && (
      <nav>
        <ul
          sx={{
            margin: 0,
            padding: 0,
            listStyle: `none outside none`,
            display: `flex`,
            flexDirection: `row`,
            alignItems: [`center`],
          }}
        >
          {links.map(({ title, path }) => (
            <li
              key={title}
              sx={{
                margin: 2,
                textAlign: "center",
              }}
            >
              <Link
                to={path}
                sx={{
                  variant: `text.caption`,
                  textDecoration: `none`,
                }}
              >
                {title}
              </Link>
            </li>
          ))}
          <li
            key="test"
            sx={{
              margin: 2,
              textAlign: "center",
            }}
          >
            <Link
              to="/legal"
              sx={{
                variant: `text.caption`,
                textDecoration: `none`,
              }}
            >
              Mentions{" "}
              <span sx={{ textDecoration: "line-through" }}>Très-Bien</span>{" "}
              légales
            </Link>
          </li>
        </ul>
      </nav>
    )
  );
};

FooterNav.propTypes = {
  links: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      path: PropTypes.string.isRequired,
    })
  ),
};

export default FooterNav;
