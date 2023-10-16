import React from 'react';
import PropTypes from 'prop-types';

function Link(props) {
  const {
    href,
    block,
    size = "lg",
    style = "primary",
    className,
    ...rest
  } = props;

  const sizes = {
    lg: "px-5 py-2.5",
    md: "px-4 py-2",
  };

  const styles = {
    outline: "bg-white border-2 border-black hover:bg-gray-100 text-black",
    primary: "bg-black text-white hover:bg-gray-800 border-2 border-transparent",
    inverted: "bg-white text-black border-2 border-transparent",
    muted: "bg-gray-100 hover:bg-gray-200 border-2 border-transparent",
  };

  const classes = [
    "rounded text-center transition focus-visible:ring-2 ring-offset-2 ring-gray-200",
    block ? "w-full" : "",
    sizes[size],
    styles[style],
    className,
  ].join(' ');

  return <a href={href} {...rest} className={classes}>{props.children}</a>;
}

Link.propTypes = {
  href: PropTypes.string.isRequired,
  size: PropTypes.oneOf(["md", "lg"]),
  block: PropTypes.bool,
  style: PropTypes.oneOf(["outline", "primary", "inverted", "muted"]),
  className: PropTypes.string,
};

export default Link;
