/** @jsx jsx */
import { jsx } from "theme-ui";
import Link from "gatsby-theme-flex/src/components/link";
import PropTypes from "prop-types";

const FooterNav = ({ links }) => {
  return (
    links && (
      <nav
        sx={{
          width: ["100%", "90%"],
        }}
      >
        <ul
          sx={{
            margin: 0,
            padding: 0,
            listStyle: `none outside none`,
            display: `flex`,
            flexDirection: `row`,
            alignItems: [`space-evenly`],
          }}
        >
          {links.map(({ title, path }) => (
            <li
              key={title}
              sx={{
                my: 2,
                mx: [2, 6],
                textAlign: "center",
                flexBasis: "33%",
              }}
            >
              <Link
                to={path}
                sx={{
                  variant: `text.small`,
                  textDecoration: `none`,
                }}
              >
                {title}
              </Link>
            </li>
          ))}
          <li
            key="mentions"
            sx={{
              my: 2,
              mx: [2, 6],
              textAlign: "center",
              flexBasis: "33%",
            }}
          >
            <Link
              to="/legal"
              sx={{
                variant: `text.small`,
                textDecoration: `none`,
              }}
            >
              Mentions{" "}
              <span
                sx={{ textDecoration: "line-through", whiteSpace: "nowrap" }}
              >
                Très-Bien
              </span>{" "}
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
