const Typography = ({ variant, children }) => {
  const getVariantStyles = () => {
    switch (variant) {
      case "title":
        return "text-3xl font-bold mb-4";
      case "description":
        return "text-lg font-normal mb-2";
      case "paragraph":
        return "text-base font-normal mb-4";
      case "text":
      default:
        return "text-base font-normal mb-2";
    }
  };

  const styles = getVariantStyles();

  return <div className={styles}>{children}</div>;
};

export default Typography;
