import Browser
import Html exposing (Html, Attribute, div, input, text, a)
import Html.Attributes exposing (..)
import Html.Events exposing (onInput)



-- MAIN
main =
  Browser.sandbox { init = init, update = update, view = view }



-- MODEL


type alias Model =
  { content : String
  }


init : Model
init =
  { content = "" }

-- UPDATE


type Msg
  = Change String


update : Msg -> Model -> Model
update msg model =
  case msg of
    Change newContent ->
      { model | content = newContent }



-- VIEW


view : Model -> Html Msg
view model =
  div []
      [ input [ placeholder "String 1" ]
          []
      , input [ placeholder "String 2" ]
          []
      , div []
      [ text ": " ]
      , a [href "https://mac1xa3.ca/u/kumars35/"]

      [ text "https://mac1xa3.ca/u/kumars35/" ]
      ]
