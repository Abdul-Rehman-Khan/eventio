import styled from 'styled-components'
import {FC} from 'react'
import {EventItem} from '../../api/Events/types'
import {CARD_SHADOW, COLOR, BP} from '../../styles/constants'
import EventItemButton from './EventItemButton'
import {formatDate} from '../../utils/helper-functions'

interface Props {
  eventItem: EventItem
  action?: boolean
  setActionTriggered?: React.Dispatch<React.SetStateAction<boolean>>
}

const EventItemCard: FC<Props> = ({eventItem, setActionTriggered, action}) => (
  <Container>
    <StartDate>{formatDate(eventItem.startsAt)}</StartDate>
    <Title>{eventItem.title}</Title>
    <Owner>{`${eventItem.owner.firstName} ${eventItem.owner.lastName}`}</Owner>
    <Description>{eventItem.description}</Description>

    <BottomRow>
      <Capacity>
        <img src="/icons/person.svg" alt="Capacity" />
        <p> {`${eventItem.attendees.length} of ${eventItem.capacity}`}</p>
      </Capacity>

      <EventItemButton
        eventItem={eventItem}
        action={action}
        setActionTriggered={setActionTriggered}
      />
    </BottomRow>
  </Container>
)

const Container = styled.div`
  background: #fff;
  padding: 3rem;
  width: 45rem;
  margin-bottom: 2rem;
  margin-right: 2rem;
  box-shadow: ${CARD_SHADOW};
  display: flex;
  flex-direction: column;

  @media (max-width: ${BP.MOBILE}) {
    width: 100%;
    margin-right: 0;
  }
`
const Title = styled.p`
  font-size: 2.4rem;
  line-height: 2.4rem;
  font-weight: 500;
  margin-top: 2rem;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
`
const Description = styled.p`
  margin-top: 2rem;
  margin-bottom: 2rem;
  color: ${COLOR.GREY_TEXT_LIGHT};
  overflow: hidden;
  text-overflow: ellipsis;
`
const Owner = styled.p`
  color: ${COLOR.GREY_TEXT_DARK};
  opacity: 0.9;
  font-size: 1.5rem;
`
const StartDate = styled.p`
  color: ${COLOR.GREY_TEXT_LIGHT};
  opacity: 0.6;
`
const Capacity = styled.div`
  display: flex;
  align-items: center;

  /* Person icon */
  > img {
    height: 1.6rem;
  }

  /* Capacity value */
  > p {
    margin-left: 1rem;
    color: ${COLOR.GREY_TEXT_LIGHT};
  }
`
const BottomRow = styled.div`
  margin-top: auto;
  display: flex;
  justify-content: space-between;
`

export default EventItemCard
