export const Cart = ({
  color = '#000',
  width = '25',
  height = '20',
  className,
  fill = 'none',
  ...props
}) => (
  <svg
    className={className}
    width={width}
    height={height}
    viewBox="0 0 25 20"
    fill={fill}
    {...props}
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M0 0.9375C0 0.417969 0.468382 0 1.05058 0H3.04229C4.00532 0 4.85891 0.5 5.25726 1.25H23.2484C24.3996 1.25 25.2401 2.22656 24.938 3.21875L23.1433 9.16797C22.7712 10.3945 21.5237 11.25 20.101 11.25H7.47222L7.7086 12.3633C7.8049 12.8047 8.23826 13.125 8.74166 13.125H21.3617C21.9439 13.125 22.4123 13.543 22.4123 14.0625C22.4123 14.582 21.9439 15 21.3617 15H8.74166C7.22708 15 5.927 14.0391 5.64684 12.7148L3.38811 2.12891C3.35746 1.98047 3.21301 1.875 3.04229 1.875H1.05058C0.468382 1.875 0 1.45703 0 0.9375ZM5.60307 18.125C5.60307 17.8788 5.65742 17.635 5.76301 17.4075C5.8686 17.18 6.02337 16.9733 6.21848 16.7992C6.41359 16.6251 6.64522 16.487 6.90015 16.3927C7.15507 16.2985 7.42829 16.25 7.70422 16.25C7.98015 16.25 8.25337 16.2985 8.5083 16.3927C8.76322 16.487 8.99485 16.6251 9.18996 16.7992C9.38507 16.9733 9.53984 17.18 9.64543 17.4075C9.75102 17.635 9.80537 17.8788 9.80537 18.125C9.80537 18.3712 9.75102 18.615 9.64543 18.8425C9.53984 19.07 9.38507 19.2767 9.18996 19.4508C8.99485 19.6249 8.76322 19.763 8.5083 19.8573C8.25337 19.9515 7.98015 20 7.70422 20C7.42829 20 7.15507 19.9515 6.90015 19.8573C6.64522 19.763 6.41359 19.6249 6.21848 19.4508C6.02337 19.2767 5.8686 19.07 5.76301 18.8425C5.65742 18.615 5.60307 18.3712 5.60307 18.125ZM20.3111 16.25C20.8684 16.25 21.4028 16.4475 21.7969 16.7992C22.1909 17.1508 22.4123 17.6277 22.4123 18.125C22.4123 18.6223 22.1909 19.0992 21.7969 19.4508C21.4028 19.8025 20.8684 20 20.3111 20C19.7539 20 19.2194 19.8025 18.8254 19.4508C18.4313 19.0992 18.21 18.6223 18.21 18.125C18.21 17.6277 18.4313 17.1508 18.8254 16.7992C19.2194 16.4475 19.7539 16.25 20.3111 16.25Z"
      fill={color}
    />
  </svg>
);

export const Close = ({
  color = '#000',
  width = '10',
  height = '10',
  className,
  fill = 'none',
  ...props
}) => (
  <svg
    className={className}
    width={width}
    height={height}
    viewBox="0 0 10 10"
    fill={fill}
    {...props}
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M9.80683 1.17219C10.1011 0.868641 10.0542 0.417785 9.70007 0.165573C9.34594 -0.0866382 8.81995 -0.0464629 8.52571 0.257084L5 3.88402L1.47429 0.257084C1.18005 -0.0464629 0.65406 -0.0866382 0.299927 0.165573C-0.054206 0.417785 -0.101076 0.868641 0.193166 1.17219L3.91417 5L0.193166 8.82781C-0.101076 9.13136 -0.054206 9.58221 0.299927 9.83443C0.65406 10.0866 1.18005 10.0465 1.47429 9.74292L5 6.11598L8.52571 9.74292C8.81995 10.0465 9.34594 10.0866 9.70007 9.83443C10.0542 9.58221 10.1011 9.13136 9.80683 8.82781L6.08583 5L9.80683 1.17219Z"
      fill={color}
    />
  </svg>
);

export const Facebook = ({
  color = '#fff',
  width = '22',
  height = '22',
  className,
  fill = 'none',
  ...props
}) => (
  <svg
    className={className}
    width={width}
    height={height}
    viewBox="0 0 22 22"
    fill={fill}
    {...props}
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M22 11.0669C22 4.95335 17.0766 0 11 0C4.92339 0 0 4.95335 0 11.0669C0 16.5906 4.02254 21.1691 9.28125 22V14.2661H6.4869V11.0669H9.28125V8.62864C9.28125 5.85521 10.9224 4.32325 13.436 4.32325C14.6398 4.32325 15.8985 4.53923 15.8985 4.53923V7.26134H14.5111C13.145 7.26134 12.7188 8.11456 12.7188 8.98966V11.0669H15.7695L15.2816 14.2661H12.7188V22C17.9775 21.1691 22 16.5906 22 11.0669Z"
      fill={color}
    />
  </svg>
);

export const EmptyHeart = ({
  color = '#000',
  width = '22',
  height = '20',
  className,
  fill = 'none',
  ...props
}) => (
  <svg
    className={className}
    width={width}
    height={height}
    viewBox="0 0 22 20"
    fill={fill}
    {...props}
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M10.4844 2.60936L10.9613 3.12499L11.477 2.61022C12.9164 1.20729 14.9102 0.568779 16.8695 0.894912C19.8301 1.38819 22 3.94999 22 6.95351V7.20272C22 8.98593 21.2609 10.6918 19.9547 11.9078L12.1902 19.1566C11.868 19.4574 11.4426 19.625 11 19.625C10.5574 19.625 10.132 19.4574 9.80977 19.1566L2.04488 11.9078C0.740352 10.6918 0 8.98593 0 7.20272V6.95351C0 3.94999 2.17078 1.38819 5.13047 0.894912C7.05117 0.568779 9.08359 1.20729 10.4844 2.60936C10.4844 2.60979 10.4457 2.60936 10.4844 2.60936ZM10.9613 6.04257L9.02773 4.03163C8.09531 3.13702 6.77187 2.71249 5.46992 2.92905C3.5041 3.2569 2.0625 4.95976 2.0625 6.95351V7.20272C2.0625 8.41444 2.56566 9.5746 3.45211 10.3996L11 17.4465L18.5496 10.3996C19.4348 9.5746 19.9375 8.41444 19.9375 7.20272V6.95351C19.9375 4.95976 18.4937 3.2569 16.5301 2.92905C15.2281 2.71249 13.9047 3.13702 12.9723 4.03163L10.9613 6.04257Z"
      fill={color}
    />
  </svg>
);

export const FilledHeart = ({
  color = '#FF0000',
  width = '22',
  height = '20',
  className,
  fill = 'none',
  ...props
}) => (
  <svg
    className={className}
    width={width}
    height={height}
    viewBox="0 0 15 13"
    fill={fill}
    {...props}
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M1.39453 7.55551L6.68848 12.4911C6.9082 12.6959 7.19824 12.81 7.5 12.81C7.80176 12.81 8.0918 12.6959 8.31152 12.4911L13.6055 7.55551C14.4961 6.72754 15 5.56605 15 4.3519V4.18221C15 2.13717 13.5205 0.393476 11.502 0.0570243C10.166 -0.165326 8.80664 0.270598 7.85156 1.22436L7.5 1.57544L7.14844 1.22436C6.19336 0.270598 4.83398 -0.165326 3.49805 0.0570243C1.47949 0.393476 0 2.13717 0 4.18221V4.3519C0 5.56605 0.503906 6.72754 1.39453 7.55551Z"
      fill={color}
    />
  </svg>
);

export const Instagram = ({
  color = '#fff',
  width = '22',
  height = '22',
  className,
  fill = 'none',
  ...props
}) => (
  <svg
    className={className}
    width={width}
    height={height}
    viewBox="0 0 22 22"
    fill={fill}
    {...props}
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M11.0025 5.35948C7.88098 5.35948 5.36319 7.87783 5.36319 11C5.36319 14.1222 7.88098 16.6405 11.0025 16.6405C14.1239 16.6405 16.6417 14.1222 16.6417 11C16.6417 7.87783 14.1239 5.35948 11.0025 5.35948ZM11.0025 14.6671C8.98528 14.6671 7.3362 13.0225 7.3362 11C7.3362 8.97746 8.98037 7.33293 11.0025 7.33293C13.0245 7.33293 14.6687 8.97746 14.6687 11C14.6687 13.0225 13.0196 14.6671 11.0025 14.6671ZM18.1877 5.12875C18.1877 5.8602 17.5988 6.44438 16.8724 6.44438C16.1411 6.44438 15.5571 5.85529 15.5571 5.12875C15.5571 4.40221 16.146 3.81312 16.8724 3.81312C17.5988 3.81312 18.1877 4.40221 18.1877 5.12875ZM21.9227 6.46402C21.8393 4.70166 21.4368 3.14058 20.146 1.8544C18.8601 0.568225 17.2994 0.165681 15.5374 0.0773179C13.7215 -0.0257726 8.27853 -0.0257726 6.46258 0.0773179C4.70552 0.160772 3.14479 0.563316 1.85399 1.84949C0.56319 3.13567 0.165644 4.69675 0.0773006 6.45911C-0.0257669 8.27547 -0.0257669 13.7196 0.0773006 15.536C0.160736 17.2983 0.56319 18.8594 1.85399 20.1456C3.14479 21.4318 4.70061 21.8343 6.46258 21.9227C8.27853 22.0258 13.7215 22.0258 15.5374 21.9227C17.2994 21.8392 18.8601 21.4367 20.146 20.1456C21.4319 18.8594 21.8344 17.2983 21.9227 15.536C22.0258 13.7196 22.0258 8.28038 21.9227 6.46402ZM19.5767 17.4849C19.1939 18.4471 18.4528 19.1883 17.4859 19.5761C16.038 20.1505 12.6025 20.018 11.0025 20.018C9.40245 20.018 5.96196 20.1456 4.51902 19.5761C3.55705 19.1932 2.81595 18.452 2.42822 17.4849C1.85399 16.0367 1.9865 12.6004 1.9865 11C1.9865 9.39964 1.8589 5.95838 2.42822 4.51512C2.81104 3.55294 3.55215 2.81167 4.51902 2.42385C5.96687 1.84949 9.40245 1.98204 11.0025 1.98204C12.6025 1.98204 16.0429 1.8544 17.4859 2.42385C18.4479 2.80676 19.189 3.54803 19.5767 4.51512C20.1509 5.96329 20.0184 9.39964 20.0184 11C20.0184 12.6004 20.1509 16.0416 19.5767 17.4849Z"
      fill={color}
    />
  </svg>
);

export const Language = ({
  color = '#fff',
  width = '24',
  height = '24',
  className,
  fill = 'none',
  ...props
}) => (
  <svg
    className={className}
    width={width}
    height={height}
    viewBox="0 0 24 24"
    fill={fill}
    {...props}
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M16.5 12C16.5 13.0406 16.4438 14.0438 16.3453 15H7.65469C7.55156 14.0438 7.5 13.0406 7.5 12C7.5 10.9594 7.55625 9.95625 7.65469 9H16.3453C16.4484 9.95625 16.5 10.9594 16.5 12ZM17.85 9H23.6203C23.8687 9.96094 24 10.9641 24 12C24 13.0359 23.8687 14.0391 23.6203 15H17.85C17.9484 14.0344 18 13.0312 18 12C18 10.9688 17.9484 9.96563 17.85 9ZM23.1281 7.5H17.6578C17.1891 4.50469 16.2609 1.99688 15.0656 0.39375C18.7359 1.36406 21.7219 4.02656 23.1234 7.5H23.1281ZM16.1391 7.5H7.86094C8.14687 5.79375 8.5875 4.28438 9.12656 3.06094C9.61875 1.95469 10.1672 1.15313 10.6969 0.646875C11.2219 0.15 11.6578 0 12 0C12.3422 0 12.7781 0.15 13.3031 0.646875C13.8328 1.15313 14.3812 1.95469 14.8734 3.06094C15.4172 4.27969 15.8531 5.78906 16.1391 7.5ZM6.34219 7.5H0.871875C2.27813 4.02656 5.25938 1.36406 8.93438 0.39375C7.73906 1.99688 6.81094 4.50469 6.34219 7.5ZM0.379688 9H6.15C6.05156 9.96563 6 10.9688 6 12C6 13.0312 6.05156 14.0344 6.15 15H0.379688C0.13125 14.0391 0 13.0359 0 12C0 10.9641 0.13125 9.96094 0.379688 9ZM9.12656 20.9344C8.58281 19.7156 8.14687 18.2063 7.86094 16.5H16.1391C15.8531 18.2063 15.4125 19.7156 14.8734 20.9344C14.3812 22.0406 13.8328 22.8422 13.3031 23.3484C12.7781 23.85 12.3422 24 12 24C11.6578 24 11.2219 23.85 10.6969 23.3531C10.1672 22.8469 9.61875 22.0453 9.12656 20.9391V20.9344ZM6.34219 16.5C6.81094 19.4953 7.73906 22.0031 8.93438 23.6063C5.25938 22.6359 2.27813 19.9734 0.871875 16.5H6.34219ZM23.1281 16.5C21.7219 19.9734 18.7406 22.6359 15.0703 23.6063C16.2656 22.0031 17.1891 19.4953 17.6625 16.5H23.1281Z"
      fill={color}
    />
  </svg>
);

export const Mail = ({
  color = '#fff',
  width = '22',
  height = '16',
  className,
  fill = 'none',
  ...props
}) => (
  <svg
    className={className}
    width={width}
    height={height}
    viewBox="0 0 22 16"
    fill={fill}
    {...props}
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M2.0625 0C0.923828 0 0 0.895833 0 2C0 2.62917 0.305078 3.22083 0.825 3.6L10.175 10.4C10.6648 10.7542 11.3352 10.7542 11.825 10.4L21.175 3.6C21.6949 3.22083 22 2.62917 22 2C22 0.895833 21.0762 0 19.9375 0H2.0625ZM0 4.66667V13.3333C0 14.8042 1.2332 16 2.75 16H19.25C20.7668 16 22 14.8042 22 13.3333V4.66667L12.65 11.4667C11.6703 12.1792 10.3297 12.1792 9.35 11.4667L0 4.66667Z"
      fill={color}
    />
  </svg>
);

export const Phone = ({
  color = '#fff',
  width = '19',
  height = '16',
  className,
  fill = 'none',
  ...props
}) => (
  <svg
    className={className}
    width={width}
    height={height}
    viewBox="0 0 19 16"
    fill={fill}
    {...props}
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M6.11907 0.769421C5.83334 0.188196 5.08005 -0.121165 4.36016 0.0444527L1.09468 0.79442C0.449004 0.944413 0 1.43814 0 2.00062C0 9.73153 7.44381 16 16.6243 16C17.2922 16 17.8785 15.6219 18.0566 15.0782L18.9472 12.3283C19.1439 11.7221 18.7765 11.0877 18.0863 10.8471L14.524 9.59716C13.9191 9.38467 13.2178 9.53154 12.8059 9.95964L11.3067 11.5002C8.69434 10.4596 6.5792 8.67845 5.34351 6.47855L7.17293 5.21922C7.6813 4.86924 7.85571 4.28177 7.60337 3.77241L6.11907 0.772546V0.769421Z"
      fill={color}
    />
  </svg>
);

export const Search = ({
  color = '#000',
  width = '19',
  height = '20',
  className,
  fill = 'none',
  ...props
}) => (
  <svg
    className={className}
    width={width}
    height={height}
    viewBox="0 0 19 20"
    fill={fill}
    {...props}
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M15.4383 8.09717C15.4383 9.884 14.8853 11.5346 13.9538 12.8737L18.6521 17.806C19.116 18.2926 19.116 19.0829 18.6521 19.5695C18.1882 20.0561 17.4348 20.0561 16.9709 19.5695L12.2727 14.6372C10.996 15.6182 9.42253 16.1943 7.71913 16.1943C3.45505 16.1943 0 12.5701 0 8.09717C0 3.62426 3.45505 0 7.71913 0C11.9832 0 15.4383 3.62426 15.4383 8.09717ZM7.71913 13.7029C8.42091 13.7029 9.11583 13.5579 9.76419 13.2762C10.4126 12.9945 11.0017 12.5816 11.4979 12.061C11.9941 11.5405 12.3878 10.9225 12.6563 10.2424C12.9249 9.56228 13.0631 8.83333 13.0631 8.09717C13.0631 7.36102 12.9249 6.63207 12.6563 5.95195C12.3878 5.27183 11.9941 4.65386 11.4979 4.13332C11.0017 3.61278 10.4126 3.19986 9.76419 2.91815C9.11583 2.63644 8.42091 2.49144 7.71913 2.49144C7.01734 2.49144 6.32243 2.63644 5.67406 2.91815C5.0257 3.19986 4.43658 3.61278 3.94034 4.13332C3.4441 4.65386 3.05047 5.27183 2.7819 5.95195C2.51334 6.63207 2.37512 7.36102 2.37512 8.09717C2.37512 8.83333 2.51334 9.56228 2.7819 10.2424C3.05047 10.9225 3.4441 11.5405 3.94034 12.061C4.43658 12.5816 5.0257 12.9945 5.67406 13.2762C6.32243 13.5579 7.01734 13.7029 7.71913 13.7029Z"
      fill={color}
    />
  </svg>
);

export const User = ({
  color = '#000',
  width = '20',
  height = '25',
  className,
  fill = 'none',
  ...props
}) => (
  <svg
    className={className}
    width={width}
    height={height}
    viewBox="0 0 20 25"
    fill={fill}
    {...props}
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M16.6304 16.5C18.4914 16.5 20.054 14.9202 19.2388 13.2472C18.7362 12.216 17.9997 11.2789 17.0711 10.4896C16.1425 9.70033 15.0401 9.07422 13.8268 8.64706C12.6136 8.21989 11.3132 8.00003 10 8.00003C8.68678 8.00003 7.38642 8.21989 6.17317 8.64706C4.95991 9.07422 3.85752 9.70033 2.92893 10.4896C2.00035 11.2789 1.26375 12.216 0.761204 13.2472C-0.0540234 14.9202 1.50862 16.5001 3.3696 16.5001L10 16.5H16.6304Z"
      fill={color}
    />
    <ellipse cx="9.99997" cy="3.50001" rx="4.11765" ry="3.50001" fill={color} />
  </svg>
);

export const NoFilledUser = ({
  color = '#333333',
  width = '16',
  height = '20',
  className,
  fill = 'none',
  ...props
}) => (
  <svg
    className={className}
    width={width}
    height={height}
    viewBox="0 0 16 20"
    fill={fill}
    {...props}
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M11.6668 5.41667C11.6668 6.38913 11.2805 7.32176 10.5929 8.00939C9.90525 8.69703 8.97262 9.08333 8.00016 9.08333C7.0277 9.08333 6.09507 8.69703 5.40744 8.00939C4.7198 7.32176 4.3335 6.38913 4.3335 5.41667C4.3335 4.44421 4.7198 3.51158 5.40744 2.82394C6.09507 2.13631 7.0277 1.75 8.00016 1.75C8.97262 1.75 9.90525 2.13631 10.5929 2.82394C11.2805 3.51158 11.6668 4.44421 11.6668 5.41667V5.41667Z"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M8.00016 11.8333C6.29836 11.8333 4.66625 12.5094 3.46289 13.7127C2.25954 14.9161 1.5835 16.5482 1.5835 18.25H14.4168C14.4168 16.5482 13.7408 14.9161 12.5374 13.7127C11.3341 12.5094 9.70197 11.8333 8.00016 11.8333V11.8333Z"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const Adding = ({
  color = '#4F4F4F',
  width = '36',
  height = '35',
  className,
  fill = 'none',
  ...props
}) => (
  <svg
    className={className}
    width={width}
    height={height}
    viewBox="0 0 36 35"
    fill={fill}
    {...props}
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M5.91667 17.4998C5.91667 11.0565 11.14 5.83317 17.5833 5.83317C24.0267 5.83317 29.25 11.0565 29.25 17.4998C29.25 23.9432 24.0267 29.1665 17.5833 29.1665C11.14 29.1665 5.91667 23.9432 5.91667 17.4998ZM17.5833 2.9165C9.52918 2.9165 3 9.44568 3 17.4998C3 25.554 9.52918 32.0832 17.5833 32.0832C25.6375 32.0832 32.1667 25.554 32.1667 17.4998C32.1667 9.44568 25.6375 2.9165 17.5833 2.9165ZM17.5833 24.7915C16.7779 24.7915 16.125 24.1386 16.125 23.3332V18.9582H11.75C10.9446 18.9582 10.2917 18.3053 10.2917 17.4998C10.2917 16.6944 10.9446 16.0415 11.75 16.0415H16.125V11.6665C16.125 10.8611 16.7779 10.2082 17.5833 10.2082C18.3887 10.2082 19.0417 10.8611 19.0417 11.6665V16.0415H23.4167C24.2221 16.0415 24.875 16.6944 24.875 17.4998C24.875 18.3053 24.2221 18.9582 23.4167 18.9582H19.0417V23.3332C19.0417 24.1386 18.3887 24.7915 17.5833 24.7915Z"
      fill={color}
    />
  </svg>
);

export const Union = ({
  color = '#4F4F4F',
  width = '30',
  height = '31',
  className,
  fill = 'none',
  ...props
}) => (
  <svg
    className={className}
    width={width}
    height={height}
    viewBox="0 0 30 31"
    fill={fill}
    {...props}
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M2.91667 15.5003C2.91667 9.057 8.14001 3.83366 14.5833 3.83366C21.0267 3.83366 26.25 9.057 26.25 15.5003C26.25 21.9436 21.0267 27.167 14.5833 27.167C8.14001 27.167 2.91667 21.9436 2.91667 15.5003ZM14.5833 0.916992C6.52918 0.916992 0 7.44617 0 15.5003C0 23.5545 6.52918 30.0837 14.5833 30.0837C22.6375 30.0837 29.1667 23.5545 29.1667 15.5003C29.1667 7.44617 22.6375 0.916992 14.5833 0.916992ZM8.75 14.042C7.94458 14.042 7.29167 14.6949 7.29167 15.5003C7.29167 16.3057 7.94458 16.9587 8.75 16.9587H20.4167C21.2221 16.9587 21.875 16.3057 21.875 15.5003C21.875 14.6949 21.2221 14.042 20.4167 14.042H8.75Z"
      fill={color}
    />
  </svg>
);

export const Order = ({
  color = '#333333',
  width = '16',
  height = '20',
  className,
  fill = 'none',
  ...props
}) => (
  <svg
    className={className}
    width={width}
    height={height}
    fill={fill}
    {...props}
    viewBox="0 0 16 20"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M13.4998 4.5H11.6665C11.6665 2.47417 10.0257 0.833336 7.99984 0.833336C5.974 0.833336 4.33317 2.47417 4.33317 4.5H2.49984C1.4915 4.5 0.666504 5.325 0.666504 6.33334V17.3333C0.666504 18.3417 1.4915 19.1667 2.49984 19.1667H13.4998C14.5082 19.1667 15.3332 18.3417 15.3332 17.3333V6.33334C15.3332 5.325 14.5082 4.5 13.4998 4.5ZM7.99984 2.66667C9.00817 2.66667 9.83317 3.49167 9.83317 4.5H6.1665C6.1665 3.49167 6.9915 2.66667 7.99984 2.66667ZM13.4998 17.3333H2.49984V6.33334H4.33317V8.16667C4.33317 8.67084 4.74567 9.08334 5.24984 9.08334C5.754 9.08334 6.1665 8.67084 6.1665 8.16667V6.33334H9.83317V8.16667C9.83317 8.67084 10.2457 9.08334 10.7498 9.08334C11.254 9.08334 11.6665 8.67084 11.6665 8.16667V6.33334H13.4998V17.3333Z"
      fill={color}
    />
  </svg>
);

export const Logout = ({
  color = '#7D7D7D',
  width = '20',
  height = '18',
  className,
  fill = 'none',
  ...props
}) => (
  <svg
    className={className}
    width={width}
    height={height}
    fill={fill}
    {...props}
    viewBox="0 0 20 18"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M19.6328 9.88281C20.1211 9.39453 20.1211 8.60156 19.6328 8.11328L14.6328 3.11328C14.1445 2.625 13.3516 2.625 12.8633 3.11328C12.375 3.60156 12.375 4.39453 12.8633 4.88281L15.7305 7.75H7.5C6.80859 7.75 6.25 8.30859 6.25 9C6.25 9.69141 6.80859 10.25 7.5 10.25H15.7305L12.8633 13.1172C12.375 13.6055 12.375 14.3984 12.8633 14.8867C13.3516 15.375 14.1445 15.375 14.6328 14.8867L19.6328 9.88672V9.88281ZM6.25 2.75C6.94141 2.75 7.5 2.19141 7.5 1.5C7.5 0.808594 6.94141 0.25 6.25 0.25H3.75C1.67969 0.25 0 1.92969 0 4V14C0 16.0703 1.67969 17.75 3.75 17.75H6.25C6.94141 17.75 7.5 17.1914 7.5 16.5C7.5 15.8086 6.94141 15.25 6.25 15.25H3.75C3.05859 15.25 2.5 14.6914 2.5 14V4C2.5 3.30859 3.05859 2.75 3.75 2.75H6.25Z"
      fill={color}
    />
  </svg>
);

export const Location = ({
  color = '#333333',
  width = '18',
  height = '23',
  className,
  fill = 'none',
  ...props
}) => (
  <svg
    className={className}
    width={width}
    height={height}
    fill={fill}
    {...props}
    viewBox="0 0 18 23"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M0.701527 7.6866C0.382473 9.71421 0.825797 11.7881 1.94594 13.5081L7.61346 22.2087C7.75321 22.4233 7.94429 22.5995 8.16938 22.7215C8.39446 22.8435 8.64644 22.9074 8.90247 22.9074C9.15849 22.9074 9.41047 22.8435 9.63556 22.7215C9.86065 22.5995 10.0517 22.4233 10.1915 22.2087L15.8592 13.5081C16.8985 11.9126 17.3579 10.0083 17.1602 8.11439C16.9625 6.22048 16.1197 4.45207 14.7733 3.1056C13.3217 1.6544 11.384 0.792328 9.33425 0.685765C7.28445 0.579203 5.26784 1.2357 3.67362 2.52856C2.07939 3.82142 1.02058 5.65898 0.701527 7.6866ZM9.32646 0.835563C11.3392 0.9402 13.2419 1.7867 14.6672 3.21168C15.9894 4.53383 16.8168 6.27027 17.011 8.12996C17.2051 9.98965 16.7541 11.8596 15.7335 13.4263L10.0658 22.1269C9.9712 22.2721 9.85055 22.3978 9.71043 22.4981C9.85046 22.3979 9.97104 22.2721 10.0656 22.127L15.7333 13.4264C16.7539 11.8597 17.2049 9.9898 17.0108 8.13011C16.8166 6.27042 15.9892 4.53397 14.667 3.21182C13.2417 1.78684 11.339 0.940347 9.32626 0.835709C7.48061 0.73976 5.66236 1.27383 4.16618 2.34199C5.6624 1.27373 7.48073 0.739609 9.32646 0.835563ZM14.351 12.5256L8.90249 20.8897L3.45394 12.5256C1.78639 9.9657 2.14416 6.53878 4.30447 4.37838C4.90828 3.77455 5.62512 3.29556 6.41405 2.96877C7.20298 2.64198 8.04856 2.47378 8.90249 2.47378C9.75643 2.47378 10.602 2.64198 11.3909 2.96877C12.1799 3.29556 12.8967 3.77455 13.5005 4.37838C15.6608 6.53878 16.0185 9.9657 14.351 12.5256ZM4.96311 3.61559C4.6925 3.81443 4.43673 4.03392 4.19819 4.27246C1.98776 6.48299 1.6218 9.98831 3.32805 12.6076L8.90229 21.1647L8.90244 21.1644L3.32826 12.6075C1.62201 9.98816 1.98796 6.48285 4.1984 4.27232C4.43687 4.03384 4.69258 3.81439 4.96311 3.61559ZM8.06958 10.228C8.31625 10.3928 8.60626 10.4808 8.90293 10.4808C9.20741 10.4805 9.50226 10.3877 9.74995 10.218C9.50222 10.3877 9.20729 10.4806 8.90273 10.481C8.60605 10.481 8.31604 10.393 8.06937 10.2282C7.8227 10.0633 7.63044 9.82907 7.51691 9.55498C7.40338 9.28089 7.37367 8.97929 7.43155 8.68832C7.48943 8.39735 7.63229 8.13008 7.84207 7.9203C7.89001 7.87236 7.94095 7.82791 7.99449 7.78718C7.94103 7.82787 7.89015 7.87227 7.84227 7.92015C7.63249 8.12993 7.48963 8.3972 7.43175 8.68818C7.37387 8.97915 7.40358 9.28075 7.51711 9.55484C7.63064 9.82893 7.8229 10.0632 8.06958 10.228ZM8.15291 10.1033C8.37487 10.2516 8.63581 10.3308 8.90276 10.3308C9.26072 10.3304 9.6039 10.188 9.85702 9.9349C10.1101 9.68178 10.2525 9.3386 10.2529 8.98064C10.2529 8.71369 10.1737 8.45275 10.0254 8.23079C9.87708 8.00878 9.66623 7.83575 9.41955 7.73357C9.17287 7.63139 8.90143 7.60466 8.63956 7.65675C8.37768 7.70884 8.13714 7.83742 7.94834 8.02622C7.75954 8.21502 7.63096 8.45556 7.57887 8.71744C7.52678 8.97931 7.55351 9.25075 7.65569 9.49743C7.75787 9.74411 7.9309 9.95495 8.15291 10.1033ZM12.0529 8.98081V8.98064C12.052 8.14555 11.7198 7.34493 11.1293 6.75442C10.5388 6.16392 9.7382 5.83176 8.9031 5.83081L8.90293 5.98081V5.83081C8.27992 5.83081 7.6709 6.01555 7.15288 6.36168C6.63487 6.70781 6.23113 7.19977 5.99271 7.77536C5.75429 8.35094 5.69191 8.9843 5.81346 9.59534C5.935 10.2064 6.23501 10.7677 6.67554 11.2082C7.11608 11.6487 7.67736 11.9487 8.2884 12.0703C8.89944 12.1918 9.5328 12.1294 10.1084 11.891C10.684 11.6526 11.1759 11.2489 11.5221 10.7309C11.8682 10.2128 12.0529 9.60382 12.0529 8.98081ZM7.23622 6.4864C7.72957 6.15676 8.30959 5.98081 8.90293 5.98081C9.6983 5.98172 10.4608 6.29808 11.0233 6.86049C11.5857 7.4229 11.902 8.18544 11.9029 8.98081C11.9029 9.57415 11.727 10.1542 11.3973 10.6475C11.2119 10.925 10.9825 11.1681 10.7198 11.3681C10.9825 11.1681 11.2118 10.9251 11.3971 10.6477C11.7268 10.1543 11.9027 9.5743 11.9027 8.98096C11.9018 8.18559 11.5855 7.42305 11.023 6.86064C10.4606 6.29822 9.6981 5.98186 8.90273 5.98096C8.30938 5.98096 7.72936 6.1569 7.23602 6.48655C7.22119 6.49646 7.20645 6.50649 7.19182 6.51665C7.20652 6.50644 7.22132 6.49636 7.23622 6.4864Z"
      fill={color}
    />
  </svg>
);

export const Setting = ({
  color = '#000',
  width = '42',
  height = '42',
  className,
  fill = 'none',
  ...props
}) => (
  <svg
    className={className}
    width={width}
    height={height}
    fill={fill}
    {...props}
    viewBox="0 0 42 42"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M27.6667 21C27.6667 22.3185 27.2757 23.6075 26.5431 24.7038C25.8106 25.8001 24.7694 26.6546 23.5512 27.1592C22.333 27.6638 20.9926 27.7958 19.6994 27.5386C18.4062 27.2813 17.2183 26.6464 16.286 25.714C15.3536 24.7817 14.7187 23.5938 14.4614 22.3006C14.2042 21.0074 14.3362 19.667 14.8408 18.4488C15.3454 17.2306 16.1999 16.1894 17.2962 15.4569C18.3925 14.7243 19.6815 14.3333 21 14.3333C22.7681 14.3333 24.4638 15.0357 25.714 16.286C26.9643 17.5362 27.6667 19.2319 27.6667 21ZM38.7778 16.5556H37.4667C37.0073 16.5537 36.5598 16.4096 36.1857 16.1429C35.8116 15.8763 35.5294 15.5003 35.3778 15.0667C35.1801 14.6504 35.1166 14.183 35.1962 13.7292C35.2759 13.2753 35.4946 12.8574 35.8222 12.5333L36.7333 11.6222C36.9416 11.4156 37.1069 11.1699 37.2198 10.8991C37.3326 10.6283 37.3907 10.3378 37.3907 10.0444C37.3907 9.75109 37.3326 9.46063 37.2198 9.18983C37.1069 8.91903 36.9416 8.67325 36.7333 8.46667L33.5778 5.28889C33.3712 5.0806 33.1254 4.91528 32.8546 4.80246C32.5838 4.68964 32.2934 4.63156 32 4.63156C31.7066 4.63156 31.4162 4.68964 31.1454 4.80246C30.8746 4.91528 30.6288 5.0806 30.4222 5.28889L29.5111 6.2C29.187 6.5276 28.7692 6.74635 28.3153 6.82597C27.8614 6.9056 27.394 6.84216 26.9778 6.64444C26.5322 6.49917 26.144 6.21678 25.8687 5.83762C25.5933 5.45846 25.4448 5.00195 25.4444 4.53333V3.22222C25.4444 2.63285 25.2103 2.06762 24.7936 1.65087C24.3768 1.23413 23.8116 1 23.2222 1H18.7778C18.1884 1 17.6232 1.23413 17.2064 1.65087C16.7897 2.06762 16.5556 2.63285 16.5556 3.22222V4.53333C16.5537 4.99271 16.4096 5.44022 16.1429 5.8143C15.8763 6.18838 15.5003 6.47063 15.0667 6.62222C14.6504 6.81994 14.183 6.88338 13.7292 6.80375C13.2753 6.72413 12.8574 6.50537 12.5333 6.17778L11.6222 5.26667C11.4156 5.05838 11.1699 4.89306 10.8991 4.78024C10.6283 4.66742 10.3378 4.60934 10.0444 4.60934C9.75109 4.60934 9.46063 4.66742 9.18983 4.78024C8.91903 4.89306 8.67325 5.05838 8.46667 5.26667L5.28889 8.42222C5.0806 8.62881 4.91528 8.87459 4.80246 9.14539C4.68964 9.41618 4.63156 9.70664 4.63156 10C4.63156 10.2934 4.68964 10.5838 4.80246 10.8546C4.91528 11.1254 5.0806 11.3712 5.28889 11.5778L6.2 12.4889C6.5276 12.813 6.74635 13.2309 6.82597 13.6847C6.9056 14.1386 6.84216 14.606 6.64444 15.0222C6.49285 15.4559 6.2106 15.8319 5.83652 16.0985C5.46244 16.3651 5.01493 16.5093 4.55556 16.5111H3.22222C2.63285 16.5111 2.06762 16.7452 1.65087 17.162C1.23413 17.5787 1 18.144 1 18.7333V23.1778C1 23.7671 1.23413 24.3324 1.65087 24.7491C2.06762 25.1659 2.63285 25.4 3.22222 25.4H4.53333C4.99271 25.4018 5.44022 25.546 5.8143 25.8126C6.18838 26.0792 6.47063 26.4552 6.62222 26.8889C6.81994 27.3051 6.88338 27.7725 6.80375 28.2264C6.72413 28.6803 6.50537 29.0982 6.17778 29.4222L5.26667 30.3333C5.05838 30.5399 4.89306 30.7857 4.78024 31.0565C4.66742 31.3273 4.60934 31.6178 4.60934 31.9111C4.60934 32.2045 4.66742 32.4949 4.78024 32.7657C4.89306 33.0365 5.05838 33.2823 5.26667 33.4889L8.4 36.6222C8.60658 36.8305 8.85236 36.9958 9.12316 37.1087C9.39396 37.2215 9.68442 37.2796 9.97778 37.2796C10.2711 37.2796 10.5616 37.2215 10.8324 37.1087C11.1032 36.9958 11.349 36.8305 11.5556 36.6222L12.4667 35.7111C12.7907 35.3835 13.2086 35.1648 13.6625 35.0851C14.1164 35.0055 14.5838 35.0689 15 35.2667C15.4336 35.4183 15.8097 35.7005 16.0763 36.0746C16.3429 36.4487 16.4871 36.8962 16.4889 37.3556V38.7778C16.4889 39.3671 16.723 39.9324 17.1398 40.3491C17.5565 40.7659 18.1217 41 18.7111 41H23.1556C23.7449 41 24.3102 40.7659 24.7269 40.3491C25.1437 39.9324 25.3778 39.3671 25.3778 38.7778V37.4667C25.3796 37.0073 25.5238 36.5598 25.7904 36.1857C26.057 35.8116 26.433 35.5294 26.8667 35.3778C27.2829 35.1801 27.7503 35.1166 28.2042 35.1962C28.658 35.2759 29.0759 35.4946 29.4 35.8222L30.3111 36.7333C30.5177 36.9416 30.7635 37.1069 31.0343 37.2198C31.3051 37.3326 31.5955 37.3907 31.8889 37.3907C32.1822 37.3907 32.4727 37.3326 32.7435 37.2198C33.0143 37.1069 33.2601 36.9416 33.4667 36.7333L36.6 33.6C36.8083 33.3934 36.9736 33.1476 37.0864 32.8768C37.1992 32.606 37.2573 32.3156 37.2573 32.0222C37.2573 31.7289 37.1992 31.4384 37.0864 31.1676C36.9736 30.8968 36.8083 30.651 36.6 30.4444L35.6889 29.5333C35.3613 29.2093 35.1425 28.7914 35.0629 28.3375C34.9833 27.8836 35.0467 27.4162 35.2444 27C35.396 26.5664 35.6783 26.1904 36.0524 25.9237C36.4264 25.6571 36.874 25.5129 37.3333 25.5111H38.7778C39.3671 25.5111 39.9324 25.277 40.3491 24.8602C40.7659 24.4435 41 23.8783 41 23.2889V18.7778C41 18.1884 40.7659 17.6232 40.3491 17.2064C39.9324 16.7897 39.3671 16.5556 38.7778 16.5556Z"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const Camera = ({
  color = '#000',
  width = '22',
  height = '24',
  className,
  fill = 'none',
  ...props
}) => (
  <svg
    className={className}
    width={width}
    height={height}
    fill={fill}
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 512 512"
  >
    <path
      fill={color}
      d="M149.1 64.8L138.7 96H64C28.7 96 0 124.7 0 160V416c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V160c0-35.3-28.7-64-64-64H373.3L362.9 64.8C356.4 45.2 338.1 32 317.4 32H194.6c-20.7 0-39 13.2-45.5 32.8zM256 192a96 96 0 1 1 0 192 96 96 0 1 1 0-192z"
    />
  </svg>
);

export const Gender = ({
  color = '#000',
  width = '22',
  height = '24',
  className,
  fill = 'none',
  ...props
}) => (
  <svg
    className={className}
    width={width}
    height={height}
    fill={fill}
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 640 512"
  >
    <path
      fill={color}
      d="M176 288a112 112 0 1 0 0-224 112 112 0 1 0 0 224zM352 176c0 86.3-62.1 158.1-144 173.1V384h32c17.7 0 32 14.3 32 32s-14.3 32-32 32H208v32c0 17.7-14.3 32-32 32s-32-14.3-32-32V448H112c-17.7 0-32-14.3-32-32s14.3-32 32-32h32V349.1C62.1 334.1 0 262.3 0 176C0 78.8 78.8 0 176 0s176 78.8 176 176zM271.9 360.6c19.3-10.1 36.9-23.1 52.1-38.4c20 18.5 46.7 29.8 76.1 29.8c61.9 0 112-50.1 112-112s-50.1-112-112-112c-7.2 0-14.3 .7-21.1 2c-4.9-21.5-13-41.7-24-60.2C369.3 66 384.4 64 400 64c37 0 71.4 11.4 99.8 31l20.6-20.6L487 41c-6.9-6.9-8.9-17.2-5.2-26.2S494.3 0 504 0H616c13.3 0 24 10.7 24 24V136c0 9.7-5.8 18.5-14.8 22.2s-19.3 1.7-26.2-5.2l-33.4-33.4L545 140.2c19.5 28.4 31 62.7 31 99.8c0 97.2-78.8 176-176 176c-50.5 0-96-21.3-128.1-55.4z"
    />
  </svg>
);

export const Pencil = ({
  color = '#333333',
  width = '13',
  height = '16',
  className,
  fill = 'none',
  ...props
}) => (
  <svg
    className={className}
    width={width}
    height={height}
    fill={fill}
    {...props}
    viewBox="0 0 13 16"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M12.195 3.28224L10.0258 0.542241C9.74272 0.206336 9.37174 0.0135995 8.98346 0.000692758C8.59519 -0.012214 8.2167 0.15561 7.91999 0.472241L0.794994 9.47224C0.5391 9.79821 0.379768 10.2254 0.343744 10.6822L0.00332734 14.8522C-0.00733724 14.9987 0.00770868 15.1463 0.0473925 15.2846C0.0870762 15.4229 0.150421 15.5484 0.232911 15.6522C0.306884 15.7449 0.394613 15.8182 0.491068 15.868C0.587523 15.9178 0.690805 15.943 0.794994 15.9422H0.866244L4.16749 15.5622C4.52912 15.5167 4.86736 15.3155 5.12541 14.9922L12.2504 5.99224C12.527 5.62321 12.6764 5.13075 12.666 4.62278C12.6556 4.1148 12.4863 3.63275 12.195 3.28224ZM4.02499 13.5622L1.64999 13.8422L1.86374 10.8422L6.33666 5.26224L8.47416 7.96224L4.02499 13.5622ZM9.50333 6.62224L7.38166 3.94224L8.92541 1.94224L11.0867 4.67224L9.50333 6.62224Z"
      fill={color}
    />
  </svg>
);
