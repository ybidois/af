/** @jsx jsx */
import React from "react";
import { jsx, Container, Styled } from "theme-ui";
import PropTypes from "prop-types";
import BlockLinks from "gatsby-theme-flex/src/layout/block-links";
import Lead from "gatsby-theme-flex/src/components/lead";
import Image from "gatsby-theme-flex/src/components/image";

const Hero = React.forwardRef(
  (
    {
      style,
      subHeading,
      heading,
      lead1,
      lead2,
      lead3,
      children,
      links,
      imageUrl,
      imageStyle,
      imageAlt,
      ...props
    },
    ref
  ) => (
    <section
      ref={ref}
      sx={{
        // py: [4, 6],
        pt: 2,
        pb: 6,
        ...style,
      }}
      {...props}
    >
      <Container
        sx={{
          display: `flex`,
          flexDirection: [`column`],
          alignItems: [`center`],
          textAlign: ["left"],
        }}
      >
        <div
          sx={{
            maxWidth: [`none`, `95%`, `80%`, `80%`, `70%`],
          }}
        >
          {subHeading && <Styled.h4>{subHeading}</Styled.h4>}
          {heading && (
            <Styled.h1
              sx={{
                mt: 4,
                // textAlign: ["center"],
                mb: 5,
              }}
              dangerouslySetInnerHTML={{ __html: heading }}
            />
          )}
          <Lead>{lead1}</Lead>
          <Lead>{lead2}</Lead>
          <Lead>{lead3}</Lead>
        </div>

        <BlockLinks>{links}</BlockLinks>

        {children}

        {imageUrl && (
          <Image
            src={imageUrl}
            alt={imageAlt}
            style={{
              display: "none",
              mt: [4, 8],
              ...imageStyle,
            }}
          />
        )}
      </Container>
    </section>
  )
);

Hero.propTypes = {
  style: PropTypes.object,
  subHeading: PropTypes.string,
  heading: PropTypes.string,
  lead: PropTypes.string,
  children: PropTypes.node,
  links: PropTypes.node,
  imageUrl: PropTypes.string,
  imageStyle: PropTypes.object,
  imageAlt: PropTypes.string,
};

export default Hero;
