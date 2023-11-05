import { SectionWrapper, Title } from './Section.styled';

const Section = ({ title, children }) => (
  <SectionWrapper>
    <Title>{title}</Title>
    {children}
  </SectionWrapper>
);

export default Section;
