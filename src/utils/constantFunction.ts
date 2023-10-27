export const CUSTOM_DROPDOWN_STYLE = {
    option: (provided: any, state: any) => ({
      ...provided,
      color: state.isSelected ? "var(--black-color)" : "var(--black-color)",
      background: state.isSelected ? 0 : 0,
      ":hover": {
        backgroundColor: "var(--color-blue)",
        color: "var(--white)"
      }
    }),
    control: (base: any,
      state: any
    ) => ({
      ...base,
      cursor: "pointer",
      border: "2px solid 'var(--light-blue-color1) '!important",
      borderRadius: "10px",
      padding: "0.1rem",
      // background: "var(--white)",
      height: "44px",
      // marginBottom:'2rem',
      marginBottom: '5px',
  
      // This line disable the blue border
      boxShadow: state && state?.isFocused ? 0 : 0,
      background: state && state?.isFocused ? 'var(--light-blue-color1) ' : 'var(--white)',
      "&:hover": {
        // border: state.isFocused ? 'var(--color-blue)' : 'var(--light-blue-color1) ',
      },
      "@media screen and (max-width: 524px)": {
        minHeight:"32px",
        height: "36px",
        paddingTop: "0px",
      },
    }),
  };