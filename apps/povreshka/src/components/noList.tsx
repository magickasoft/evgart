import SC from '@emotion/styled'

const Container = SC.div`
  margin: 0px;
`

const Text = SC.div`
  white-space: pre-line;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 1.1;
  color: ${({ color }) => color || '#181818'};      
`

export const NoList = ({ value }: { value: string }) => {
  return (
    <Container>
      <Text color="gray">{value}</Text>
    </Container>
  )
}
