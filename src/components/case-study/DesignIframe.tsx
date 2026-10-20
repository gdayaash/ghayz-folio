// interface DesignIframeProps {
//   iframePath: string;
//   title: string;
//   styles?: string;
// }

// const DesignIframe = ({ iframePath, title, styles }: DesignIframeProps) => {
//   return (
//     <iframe
//       src={iframePath}
//       title={title}
//       className={styles}
//       loading="lazy"
//     ></iframe>
//   );
// };

// export default DesignIframe;

interface DesignIframeProps {
  iframePath: string;
  title: string;
  styles?: string;
}

const DesignIframe = ({ iframePath, title, styles }: DesignIframeProps) => {
  return (
    <iframe
      src={iframePath}
      title={title}
      className={styles}
      loading="lazy"
      allowFullScreen
    />
  );
};

export default DesignIframe;
