/** @jsx jsx */
import React, { useState, useEffect } from "react";
import { jsx, Container, Styled } from "theme-ui";
import PropTypes from "prop-types";
import BlockLinks from "gatsby-theme-flex/src/layout/block-links";
import Lead from "gatsby-theme-flex/src/components/lead";
import Image from "gatsby-theme-flex/src/components/image";
import Button from "gatsby-theme-flex/src/components/button";

function FlashingCta(props) {
  const [counter, setCounter] = useState(0);
  const allctas = [
    "Démarre tes courses",
    "Fais tes courses à deux",
    "Ne réfléchis plus aux menus",
    "Mange sain et écolo",
    "Fais des économies",
  ];
  const [cta, setCta] = useState("");
  useEffect(() => {
    counter === 5
      ? setCounter(0)
      : setTimeout(() => setCounter(counter + 1), 2000);
    setCta(allctas[counter]);
  }, [counter]);
  console.log(cta);

  return <Button url="/lancement">{cta}</Button>;
}

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
        pb: [4, 4, 5, 6, 7],
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
            maxWidth: [`none`, `90%`, `80%`],
          }}
        >
          {subHeading && <Styled.h4>{subHeading}</Styled.h4>}
          {heading && (
            <Styled.h1
              sx={{
                mt: [4, 4, 4, 4, 6],
                // textAlign: ["center"],
                mb: [5, 5, 6, 6, 7],
              }}
              dangerouslySetInnerHTML={{ __html: heading }}
            />
          )}
          <Lead>{lead1}</Lead>
          <Lead>{lead2}</Lead>
          <Lead>{lead3}</Lead>
          <BlockLinks
            style={{
              mt: [1, 4, 5, 6, 7],
            }}
          >
            <FlashingCta link={links} />
          </BlockLinks>
        </div>

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
