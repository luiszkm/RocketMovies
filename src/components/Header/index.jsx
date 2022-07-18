import { Avatar } from "../Avatar";
import { ButtonText } from "../ButtonText";
import { Input } from "../Input";
import { Container } from "./styles";



export function Header() {




  return (
    <Container>
      <svg width="144" height="20" viewBox="0 0 163 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M0.65625 19V16.9492L2.47266 16.5977V4.35156L0.65625 4V1.9375H8.74219C10.0547 1.9375 11.1797 2.14062 12.1172 2.54688C13.0547 2.95312 13.7734 3.53516 14.2734 4.29297C14.7812 5.05078 15.0352 5.96094 15.0352 7.02344C15.0352 8.02344 14.7852 8.91797 14.2852 9.70703C13.7852 10.4961 13.0898 11.1172 12.1992 11.5703C11.3086 12.0234 10.2812 12.2539 9.11719 12.2617H5.89453V16.5977L7.72266 16.9492V19H0.65625ZM11.6367 19L8.76562 11.6289L11.8477 10.8672L14.332 16.6094L15.7852 16.9492V19H11.6367ZM5.89453 9.625H8.68359C9.66797 9.625 10.4023 9.41797 10.8867 9.00391C11.3789 8.58203 11.625 7.97266 11.625 7.17578C11.625 6.38672 11.3828 5.75781 10.8984 5.28906C10.4141 4.8125 9.69531 4.57422 8.74219 4.57422H5.89453V9.625ZM23.2852 19.2461C22.0352 19.2461 20.9609 18.9727 20.0625 18.4258C19.1641 17.8789 18.4766 17.1211 18 16.1523C17.5234 15.1758 17.2852 14.0547 17.2852 12.7891V12.543C17.2852 11.2852 17.5234 10.1719 18 9.20312C18.4766 8.22656 19.1602 7.46484 20.0508 6.91797C20.9492 6.36328 22.0195 6.08594 23.2617 6.08594C24.5195 6.08594 25.5938 6.36328 26.4844 6.91797C27.375 7.46484 28.0586 8.22266 28.5352 9.19141C29.0117 10.1602 29.25 11.2773 29.25 12.543V12.7891C29.25 14.0547 29.0117 15.1758 28.5352 16.1523C28.0586 17.1211 27.375 17.8789 26.4844 18.4258C25.5938 18.9727 24.5273 19.2461 23.2852 19.2461ZM23.2852 16.6211C23.8789 16.6211 24.3633 16.4609 24.7383 16.1406C25.1133 15.8203 25.3906 15.375 25.5703 14.8047C25.75 14.2266 25.8398 13.5547 25.8398 12.7891V12.543C25.8398 11.793 25.75 11.1328 25.5703 10.5625C25.3906 9.98438 25.1094 9.53516 24.7266 9.21484C24.3516 8.88672 23.8633 8.72266 23.2617 8.72266C22.6758 8.72266 22.1914 8.88672 21.8086 9.21484C21.4258 9.53516 21.1445 9.98438 20.9648 10.5625C20.793 11.1328 20.707 11.793 20.707 12.543V12.7891C20.707 13.5547 20.793 14.2266 20.9648 14.8047C21.1445 15.3828 21.4258 15.832 21.8086 16.1523C22.1914 16.4648 22.6836 16.6211 23.2852 16.6211ZM36.8906 19.2461C35.6719 19.2461 34.6172 18.9727 33.7266 18.4258C32.8438 17.8789 32.1641 17.125 31.6875 16.1641C31.2109 15.1953 30.9727 14.0898 30.9727 12.8477V12.4961C30.9727 11.2461 31.2148 10.1406 31.6992 9.17969C32.1836 8.21875 32.8672 7.46484 33.75 6.91797C34.6328 6.36328 35.6719 6.08594 36.8672 6.08594C38.0078 6.08594 38.9883 6.26562 39.8086 6.625C40.6367 6.97656 41.3086 7.38672 41.8242 7.85547L41.8008 11.4883H39.2227L38.7656 9.22656C38.5781 9.03906 38.3398 8.88672 38.0508 8.76953C37.7617 8.65234 37.4688 8.59375 37.1719 8.59375C36.5469 8.59375 36.0273 8.75 35.6133 9.0625C35.207 9.375 34.9023 9.82031 34.6992 10.3984C34.4961 10.9766 34.3945 11.6758 34.3945 12.4961V12.8477C34.3945 13.7148 34.5078 14.4297 34.7344 14.9922C34.9609 15.5469 35.2617 15.957 35.6367 16.2227C36.0195 16.4883 36.4453 16.6211 36.9141 16.6211C37.5156 16.6211 37.9961 16.4648 38.3555 16.1523C38.7227 15.832 38.9727 15.3828 39.1055 14.8047H42.0352L42.0703 14.875C41.9375 15.7734 41.6719 16.5508 41.2734 17.207C40.8828 17.8633 40.3281 18.3672 39.6094 18.7188C38.8984 19.0703 37.9922 19.2461 36.8906 19.2461ZM43.418 19V16.9492L45.0703 16.5977V3.13281L43.2422 2.78125V0.71875H48.4805V16.5977L49.957 16.9492V19H43.418ZM51.4922 19V17.0547L52.4531 16.832L52.4297 16.7852L49.9219 13.375L52.1016 11.1367L56.2617 16.5859L57.832 16.9492V19H51.4922ZM48.1172 15.5312L46.4766 13.6211L51.9844 8.58203L52.0078 8.54688L50.707 8.35938V6.32031H57.3047V8.38281L55.6641 8.79297L48.1172 15.5312ZM64.4648 19.2461C63.2539 19.2461 62.1953 18.9805 61.2891 18.4492C60.3828 17.9102 59.6797 17.1719 59.1797 16.2344C58.6875 15.2969 58.4414 14.2266 58.4414 13.0234V12.5547C58.4414 11.2969 58.6758 10.1836 59.1445 9.21484C59.6133 8.23828 60.2734 7.47266 61.125 6.91797C61.9844 6.35547 62.9961 6.07812 64.1602 6.08594C65.3086 6.08594 66.2734 6.3125 67.0547 6.76562C67.8359 7.21875 68.4297 7.87109 68.8359 8.72266C69.2422 9.57422 69.4453 10.6055 69.4453 11.8164V13.6797H61.9922L61.9688 13.75C62.0156 14.3047 62.1523 14.8008 62.3789 15.2383C62.6133 15.668 62.9414 16.0078 63.3633 16.2578C63.7852 16.5 64.2969 16.6211 64.8984 16.6211C65.5234 16.6211 66.1055 16.543 66.6445 16.3867C67.1914 16.2227 67.7227 15.9844 68.2383 15.6719L69.1641 17.7812C68.6406 18.2031 67.9805 18.5547 67.1836 18.8359C66.3945 19.1094 65.4883 19.2461 64.4648 19.2461ZM62.0156 11.418H66.2461V11.1133C66.2461 10.5977 66.1758 10.1562 66.0352 9.78906C65.9023 9.41406 65.6836 9.125 65.3789 8.92188C65.082 8.71875 64.6953 8.61719 64.2188 8.61719C63.7656 8.61719 63.3828 8.73828 63.0703 8.98047C62.7578 9.21484 62.5117 9.53906 62.332 9.95312C62.1602 10.3672 62.043 10.8359 61.9805 11.3594L62.0156 11.418ZM76.0078 19.2461C74.8281 19.2461 73.918 18.9219 73.2773 18.2734C72.6445 17.625 72.3281 16.5977 72.3281 15.1914V8.72266H70.582V6.32031H72.3281V3.21484H75.7383V6.32031H78.0703V8.72266H75.7383V15.1797C75.7383 15.6719 75.8398 16.0234 76.043 16.2344C76.2539 16.4453 76.5391 16.5508 76.8984 16.5508C77.0938 16.5508 77.2969 16.5391 77.5078 16.5156C77.7266 16.4844 77.9141 16.4531 78.0703 16.4219L78.3633 18.8945C78.0117 18.9961 77.6289 19.0781 77.2148 19.1406C76.8086 19.2109 76.4062 19.2461 76.0078 19.2461ZM79.5703 19V16.9492L81.3867 16.5977V4.35156L79.5703 4V1.9375H81.3867H86.4492L91.1016 13.832H91.1719L95.6719 1.9375H102.562V4L100.734 4.35156V16.5977L102.562 16.9492V19H95.4961V16.9492L97.4062 16.5977V13.3281L97.4648 5.62891L97.3945 5.61719L92.2969 18.7656H89.707L84.4922 5.72266L84.4219 5.73438L84.6211 12.9766V16.5977L86.6367 16.9492V19H79.5703ZM109.91 19.2461C108.66 19.2461 107.586 18.9727 106.688 18.4258C105.789 17.8789 105.102 17.1211 104.625 16.1523C104.148 15.1758 103.91 14.0547 103.91 12.7891V12.543C103.91 11.2852 104.148 10.1719 104.625 9.20312C105.102 8.22656 105.785 7.46484 106.676 6.91797C107.574 6.36328 108.645 6.08594 109.887 6.08594C111.145 6.08594 112.219 6.36328 113.109 6.91797C114 7.46484 114.684 8.22266 115.16 9.19141C115.637 10.1602 115.875 11.2773 115.875 12.543V12.7891C115.875 14.0547 115.637 15.1758 115.16 16.1523C114.684 17.1211 114 17.8789 113.109 18.4258C112.219 18.9727 111.152 19.2461 109.91 19.2461ZM109.91 16.6211C110.504 16.6211 110.988 16.4609 111.363 16.1406C111.738 15.8203 112.016 15.375 112.195 14.8047C112.375 14.2266 112.465 13.5547 112.465 12.7891V12.543C112.465 11.793 112.375 11.1328 112.195 10.5625C112.016 9.98438 111.734 9.53516 111.352 9.21484C110.977 8.88672 110.488 8.72266 109.887 8.72266C109.301 8.72266 108.816 8.88672 108.434 9.21484C108.051 9.53516 107.77 9.98438 107.59 10.5625C107.418 11.1328 107.332 11.793 107.332 12.543V12.7891C107.332 13.5547 107.418 14.2266 107.59 14.8047C107.77 15.3828 108.051 15.832 108.434 16.1523C108.816 16.4648 109.309 16.6211 109.91 16.6211ZM121.758 19L117.926 8.59375L116.555 8.38281V6.32031H122.707V8.37109L121.371 8.60547L123.281 14.3594L123.574 15.3438H123.645L123.973 14.3594L126.07 8.61719L124.512 8.37109V6.32031H130.652V8.38281L129.246 8.61719L125.238 19H121.758ZM131.555 19V16.9492L133.207 16.5977V8.73438L131.379 8.38281V6.32031H136.629V16.5977L138.27 16.9492V19H131.555ZM133.09 3.63672V0.71875H136.629V3.63672H133.09ZM145.488 19.2461C144.277 19.2461 143.219 18.9805 142.312 18.4492C141.406 17.9102 140.703 17.1719 140.203 16.2344C139.711 15.2969 139.465 14.2266 139.465 13.0234V12.5547C139.465 11.2969 139.699 10.1836 140.168 9.21484C140.637 8.23828 141.297 7.47266 142.148 6.91797C143.008 6.35547 144.02 6.07812 145.184 6.08594C146.332 6.08594 147.297 6.3125 148.078 6.76562C148.859 7.21875 149.453 7.87109 149.859 8.72266C150.266 9.57422 150.469 10.6055 150.469 11.8164V13.6797H143.016L142.992 13.75C143.039 14.3047 143.176 14.8008 143.402 15.2383C143.637 15.668 143.965 16.0078 144.387 16.2578C144.809 16.5 145.32 16.6211 145.922 16.6211C146.547 16.6211 147.129 16.543 147.668 16.3867C148.215 16.2227 148.746 15.9844 149.262 15.6719L150.188 17.7812C149.664 18.2031 149.004 18.5547 148.207 18.8359C147.418 19.1094 146.512 19.2461 145.488 19.2461ZM143.039 11.418H147.27V11.1133C147.27 10.5977 147.199 10.1562 147.059 9.78906C146.926 9.41406 146.707 9.125 146.402 8.92188C146.105 8.71875 145.719 8.61719 145.242 8.61719C144.789 8.61719 144.406 8.73828 144.094 8.98047C143.781 9.21484 143.535 9.53906 143.355 9.95312C143.184 10.3672 143.066 10.8359 143.004 11.3594L143.039 11.418ZM157.512 19.2461C156.566 19.2461 155.684 19.1562 154.863 18.9766C154.051 18.7969 153.27 18.5391 152.52 18.2031L152.484 14.6172H154.863L155.32 16.4453C155.586 16.5781 155.875 16.6836 156.188 16.7617C156.508 16.8398 156.871 16.8789 157.277 16.8789C158.043 16.8789 158.582 16.7539 158.895 16.5039C159.207 16.2539 159.363 15.9414 159.363 15.5664C159.363 15.2148 159.195 14.9062 158.859 14.6406C158.531 14.3672 157.871 14.1289 156.879 13.9258C155.379 13.6133 154.273 13.1289 153.562 12.4727C152.852 11.8164 152.496 10.9766 152.496 9.95312C152.496 9.25 152.672 8.60938 153.023 8.03125C153.383 7.45312 153.926 6.98828 154.652 6.63672C155.387 6.28516 156.324 6.10938 157.465 6.10938C158.418 6.10938 159.289 6.20312 160.078 6.39062C160.875 6.57031 161.543 6.80859 162.082 7.10547L162.117 10.5742H159.75L159.387 8.91016C159.176 8.75391 158.926 8.63672 158.637 8.55859C158.355 8.48047 158.035 8.44141 157.676 8.44141C157.074 8.44141 156.613 8.5625 156.293 8.80469C155.973 9.04688 155.812 9.35938 155.812 9.74219C155.812 9.96094 155.867 10.1641 155.977 10.3516C156.094 10.5391 156.32 10.7148 156.656 10.8789C156.992 11.043 157.48 11.1992 158.121 11.3477C159.691 11.707 160.836 12.1875 161.555 12.7891C162.273 13.3828 162.633 14.2188 162.633 15.2969C162.633 16.4766 162.203 17.4297 161.344 18.1562C160.492 18.8828 159.215 19.2461 157.512 19.2461Z" fill="#FF859B" />
      </svg>

      <Input className="sr-only"
      placeholder="Pesquisar pelo título" />

      <div >
        <div>
          <h3>Luis Murilo</h3>
          <ButtonText title='sair' />
        </div>
        <Avatar src="https://www.github.com/luiszkm.png" />
      </div>

    </Container>
  )
}