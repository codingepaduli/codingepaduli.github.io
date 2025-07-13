# Colori e formattazione:
# 
# https://en.wikipedia.org/wiki/ANSI_escape_code
# https://en.wikipedia.org/wiki/X11_color_names
# https://hexdocs.pm/color_palette/ansi_color_codes.html
# 
# Il terminale può supportare differenti palette di colore
# - ANSI 8 bit (solo 7 colori di testo e 7 di sfondo, piu formattazione grassetto, corsivo, ...)
# - 256 colori
# - 16 milioni di colori (truecolor)
#
# Verifica il tuo terminale stampando la variabile $TERM, echo $TERM restituisce 
# solo uno dei seguenti valori (che identifica il numero di colori):
# - xterm
# - xterm-256color
# - xterm-truecolor
#
# ANSI escape sequences are a standard for in-band signaling to control 
# cursor location, color, font styling, and other options on video text
# terminals and terminal emulators
#
# Una sequenza "Ansi escape", detta anche CSI (Control Sequence Introducer), nella 
# tabella ASCII è chiamata ESC, che ha valore \x1b[, \e, oppure \033 serve ad
# indicare al terminale di eseguire un comando per muovere il cursore, 
# applicare uno stile o utilizzare un colore
# 
# Dopo una sequenza "Ansi escape" si può invocare una funzione. 
# La sintassi 0;1;34m la si può leggere come una chiamata alla 
# funzione m(0,1,34), il nome della funzione è indicato dopo i 
# parametri, che si separano tra loro con un punto e virgola. 
# La sequenza \033A è semplicemente A().
#
# Le funzioni disponibili per spostare il cursore sono:
# A(n)  Cursor Up - Move cursor up by n
# B(n)  Cursor Down - Move cursor down by n
# C(n)  Cursor Forward - Move cursor forward by n
# D(n)  Cursor Back - Move cursor back by n
# E(n)  Cursor Next Line - Move cursor to the beginning of the line n lines down
# F(n)  Cursor Previous Line - Move cursor to the beginning of the line n lines up
# G(n)  Cursor Horizontal Absolute - Move cursor to the the column n within the current row
# H(n,m) Cursor Position - Move cursor to row n, column m, counting from the top left corner
# J(n)  Erase in Display - Clear part of the screen. 0, 1, 2, and 3 have various specific functions
# K(n)  Erase in Line - Clear part of the line. 0, 1, and 2 have various specific functions
# S(n)  Scroll Up Scroll window up by n lines
# T(n)  Scroll Down Scroll window down by n lines
# s()  Save Cursor Position - Save current cursor position for use with u
# u()  Restore Cursor Position -  Set cursor back to position last saved by s
#
# Quindi \x1b[1;3H invoca H(1,3) e sposta il cursore alla riga 1, colonna 3
#
# La funzione m() serve invece ad impostare i colori e la formattazione carattere, 
# che nel terminale è detta SGR (Select Graphics Rendition).
#
# I valori che può utilizzare sono:
#
# 0             Reset: turn off all attributes
# 1             Bold (or bright, it’s up to the terminal and the user config to some extent)
# 3             Italic
# 4             Underline
# 30–37         Set text colour from the basic colour palette of 0–7
# 38;5;n        Set text colour to index n in a 256-colour palette (e.g. \x1b[38;5;34m)
# 38;2;r;g;b    Set text colour to an RGB value (e.g. \x1b[38;2;255;255;0m)
# 40–47         Set background colour
# 48;5;n        Set background colour to index n in a 256-colour palette
# 48;2;r;g;b    Set background colour to an RGB value
# 90–97         Set text colour from the bright colour palette of 0–7
# 100–107       Set background colour from the bright colour palette of 0–7

# Il reset allo stile predefinito è la funzione m(0) che si invoca con "\033[0m"
# La formattazione carattere si può applicare in un solo colpo, concatenando gli 
# stili da applicare. Se voglio applicare 1, 3, 4, allora invoco m(1, 3, 4), 
# che diventa quindi "\033[1;3;4m"

# Scrivere un testo formattato e colorato diventa quindi:
# text_colored="\033[${background_code};${foreground_code};${formatting_code};${formatting_code}m  TEXT  ${reset_code}"

# Assegnazione dei colori e dei loro codici
ansiColors=(
    [30]="black"
    [31]="red"
    [32]="green"
    [33]="yellow"
    [34]="blue"
    [35]="magenta"
    [36]="cyan"
    [37]="white"

    [40]="background black"
    [41]="background red"
    [42]="background green"
    [43]="background yellow"
    [44]="background blue"
    [45]="background magenta"
    [46]="background cyan"
    [47]="background white"

    [90]="bright black"
    [91]="bright red"
    [92]="bright green"
    [93]="bright yellow"
    [94]="bright blue"
    [95]="bright magenta"
    [96]="bright cyan"
    [97]="bright white"

    [100]="bright background black"
    [101]="bright background red"
    [102]="bright background green"
    [103]="bright background yellow"
    [104]="bright background blue"
    [105]="bright background magenta"
    [106]="bright background cyan"
    [107]="bright background white"
)

formatting=(
    [0]="reset"             # Reset
    [1]="bold"              # Grassetto
    [2]="dim"               # Attenuato (dimmed)
    [3]="italic"            # Corsivo
    [4]="underline"         # Sottolineato
    [5]="blink"             # Lampeggiante (non si applica)
    [6]="hidden"            # Nascosto, ma si applica Inverse
    [7]="inverse"           # Inverso
    [8]="hidden"            # Nascosto
    [9]="strikethrough"     # Soprascritto
)

colors256=(
  [0]=":black" # Hex: #000000
  [1]=":maroon" # Hex: #800000
  [2]=":office_green" # Hex: #008000
  [3]=":yellow_003" # Hex: #808000
  [4]=":blue_004" # Hex: #000080
  [5]=":patriarch" # Hex: #800080
  [6]=":cyan_006" # Hex: #008080
  [7]=":argent" # Hex: #c0c0c0
  [8]=":gray" # Hex: #808080
  [9]=":light_red" # Hex: #ff0000
  [10]=":electric_green" # Hex: #00ff00
  [11]=":light_yellow_011" # Hex: #ffff00
  [12]=":blue" # Hex: #0000ff
  [13]=":fuchsia" # Hex: #ff00ff
  [14]=":aqua" # Hex: #00ffff
  [15]=":light_white" # Hex: #ffffff
  [16]=":black" # Hex: #000000
  [17]=":fuzzy_wuzzy" # Hex: #00005f
  [18]=":dark_blue" # Hex: #000087
  [19]=":carnation_pink" # Hex: #0000af
  [20]=":medium_blue" # Hex: #0000d7
  [21]=":blue" # Hex: #0000ff
  [22]=":camarone" # Hex: #005f00
  [23]=":bangladesh_green" # Hex: #005f5f
  [24]=":orient" # Hex: #005f87
  [25]=":endeavour" # Hex: #005faf
  [26]=":science_blue" # Hex: #005fd7
  [27]=":blue_ribbon" # Hex: #005fff
  [28]=":ao" # Hex: #008700
  [29]=":deep_sea" # Hex: #00875f
  [30]=":teal" # Hex: #008787
  [31]=":deep_cerulean" # Hex: #0087af
  [32]=":blue_cola" # Hex: #0087d7
  [33]=":azure" # Hex: #0087ff
  [34]=":dark_lime_green" # Hex: #00af00
  [35]=":go_green" # Hex: #00af5f
  [36]=":dark_cyan" # Hex: #00af87
  [37]=":bondi_blue" # Hex: #00afaf
  [38]=":cerulean" # Hex: #00afd7
  [39]=":blue_bolt" # Hex: #00afff
  [40]=":strong_lime_green" # Hex: #00d700
  [41]=":malachite" # Hex: #00d75f
  [42]=":caribbean_green_042" # Hex: #00d787
  [43]=":caribbean_green" # Hex: #00d7af
  [44]=":dark_turquoise" # Hex: #00d7d7
  [45]=":vivid_sky_blue" # Hex: #00d7ff
  [46]=":electric_green" # Hex: #00ff00
  [47]=":spring_green_047" # Hex: #00ff5f
  [48]=":guppie_green" # Hex: #00ff87
  [49]=":medium_spring_green" # Hex: #00ffaf
  [50]=":bright_turquoise" # Hex: #00ffd7
  [51]=":aqua" # Hex: #00ffff
  [52]=":blood_red" # Hex: #5f0000
  [53]=":imperial_purple" # Hex: #5f005f
  [54]=":metallic_violet" # Hex: #5f0087
  [55]=":chinese_purple" # Hex: #5f00af
  [56]=":electric_violet_056" # Hex: #5f00d7
  [57]=":electric_indigo" # Hex: #5f00ff
  [58]=":bronze_yellow" # Hex: #5f5f00
  [59]=":scorpion" # Hex: #5f5f5f
  [60]=":comet" # Hex: #5f5f87
  [61]=":dark_moderate_blue" # Hex: #5f5faf
  [62]=":indigo" # Hex: #5f5fd7
  [63]=":cornflower_blue" # Hex: #5f5fff
  [64]=":avocado" # Hex: #5f8700
  [65]=":glade_green" # Hex: #5f875f
  [66]=":juniper" # Hex: #5f8787
  [67]=":hippie_blue" # Hex: #5f87af
  [68]=":havelock_blue" # Hex: #5f87d7
  [69]=":blueberry" # Hex: #5f87ff
  [70]=":dark_green" # Hex: #5faf00
  [71]=":dark_moderate_lime_green" # Hex: #5faf5f
  [72]=":polished_pine" # Hex: #5faf87
  [73]=":crystal_blue" # Hex: #5fafaf
  [74]=":aqua_pearl" # Hex: #5fafd7
  [75]=":blue_jeans" # Hex: #5fafff
  [76]=":alien_armpit" # Hex: #5fd700
  [77]=":moderate_lime_green" # Hex: #5fd75f
  [78]=":caribbean_green_pearl" # Hex: #5fd787
  [79]=":downy" # Hex: #5fd7af
  [80]=":medium_turquoise" # Hex: #5fd7d7
  [81]=":maya_blue" # Hex: #5fd7ff
  [82]=":bright_green" # Hex: #5fff00
  [83]=":light_lime_green" # Hex: #5fff5f
  [84]=":very_light_malachite_green" # Hex: #5fff87
  [85]=":medium_aquamarine" # Hex: #5fffaf
  [86]=":aquamarine_086" # Hex: #5fffd7
  [87]=":aquamarine_087" # Hex: #5fffff
  [88]=":deep_red" # Hex: #870000
  [89]=":french_plum" # Hex: #87005f
  [90]=":fresh_eggplant" # Hex: #870087
  [91]=":purple" # Hex: #8700af
  [92]=":french_violet" # Hex: #8700d7
  [93]=":electric_violet" # Hex: #8700ff
  [94]=":brown" # Hex: #875f00
  [95]=":copper_rose" # Hex: #875f5f
  [96]=":chinese_violet" # Hex: #875f87
  [97]=":dark_moderate_violet" # Hex: #875faf
  [98]=":medium_purple" # Hex: #875fd7
  [99]=":blueberry_099" # Hex: #875fff
  [100]=":dark_yellow_olive_tone" # Hex: #878700
  [101]=":clay_creek" # Hex: #87875f
  [102]=":taupe_gray" # Hex: #878787
  [103]=":cool_grey" # Hex: #8787af
  [104]=":chetwode_blue" # Hex: #8787d7
  [105]=":violets_are_blue" # Hex: #8787ff
  [106]=":apple_green" # Hex: #87af00
  [107]=":asparagus" # Hex: #87af5f
  [108]=":bay_leaf" # Hex: #87af87
  [109]=":dark_grayish_cyan" # Hex: #87afaf
  [110]=":light_cobalt_blue" # Hex: #87afd7
  [111]=":french_sky_blue" # Hex: #87afff
  [112]=":pistachio" # Hex: #87d700
  [113]=":mantis" # Hex: #87d75f
  [114]=":pastel_green" # Hex: #87d787
  [115]=":pearl_aqua" # Hex: #87d7af
  [116]=":bermuda" # Hex: #87d7d7
  [117]=":pale_cyan" # Hex: #87d7ff
  [118]=":chartreuse" # Hex: #87ff00
  [119]=":light_green" # Hex: #87ff5f
  [120]=":very_light_lime_green" # Hex: #87ff87
  [121]=":mint_green_121" # Hex: #87ffaf
  [122]=":aquamarine" # Hex: #87ffd7
  [123]=":anakiwa" # Hex: #87ffff
  [124]=":bright_red" # Hex: #af0000
  [125]=":dark_pink" # Hex: #af005f
  [126]=":dark_magenta" # Hex: #af0087
  [127]=":heliotrope_magenta" # Hex: #af00af
  [128]=":vivid_mulberry" # Hex: #af00d7
  [129]=":electric_purple" # Hex: #af00ff
  [130]=":dark_orange_brown_tone" # Hex: #af5f00
  [131]=":dark_moderate_red" # Hex: #af5f5f
  [132]=":dark_moderate_pink" # Hex: #af5f87
  [133]=":dark_moderate_magenta" # Hex: #af5faf
  [134]=":rich_lilac" # Hex: #af5fd7
  [135]=":lavender_indigo" # Hex: #af5fff
  [136]=":dark_goldenrod" # Hex: #af8700
  [137]=":bronze" # Hex: #af875f
  [138]=":dark_grayish_red" # Hex: #af8787
  [139]=":bouquet" # Hex: #af87af
  [140]=":lavender" # Hex: #af87d7
  [141]=":bright_lavender" # Hex: #af87ff
  [142]=":buddha_gold" # Hex: #afaf00
  [143]=":dark_moderate_yellow" # Hex: #afaf5f
  [144]=":dark_grayish_yellow" # Hex: #afaf87
  [145]=":silver_foil" # Hex: #afafaf
  [146]=":grayish_blue" # Hex: #afafd7
  [147]=":maximum_blue_purple" # Hex: #afafff
  [148]=":rio_grande" # Hex: #afd700
  [149]=":conifer" # Hex: #afd75f
  [150]=":feijoa" # Hex: #afd787
  [151]=":grayish_lime_green" # Hex: #afd7af
  [152]=":crystal" # Hex: #afd7d7
  [153]=":fresh_air" # Hex: #afd7ff
  [154]=":lime" # Hex: #afff00
  [155]=":green_yellow" # Hex: #afff5f
  [156]=":mint_green" # Hex: #afff87
  [157]=":menthol" # Hex: #afffaf
  [158]=":aero_blue" # Hex: #afffd7
  [159]=":celeste" # Hex: #afffff
  [160]=":guardsman_red" # Hex: #d70000
  [161]=":razzmatazz" # Hex: #d7005f
  [162]=":mexican_pink" # Hex: #d70087
  [163]=":hollywood_cerise_163" # Hex: #d700af
  [164]=":deep_magenta" # Hex: #d700d7
  [165]=":phlox" # Hex: #d700ff
  [166]=":strong_orange" # Hex: #d75f00
  [167]=":indian_red" # Hex: #d75f5f
  [168]=":blush" # Hex: #d75f87
  [169]=":hopbush" # Hex: #d75faf
  [170]=":moderate_magenta" # Hex: #d75fd7
  [171]=":heliotrope" # Hex: #d75fff
  [172]=":chocolate" # Hex: #d78700
  [173]=":copperfield" # Hex: #d7875f
  [174]=":my_pink" # Hex: #d78787
  [175]=":can_can" # Hex: #d787af
  [176]=":deep_mauve" # Hex: #d787d7
  [177]=":bright_lilac" # Hex: #d787ff
  [178]=":goldenrod" # Hex: #d7af00
  [179]=":earth_yellow" # Hex: #d7af5f
  [180]=":slightly_desaturated_orange" # Hex: #d7af87
  [181]=":clam_shell" # Hex: #d7afaf
  [182]=":grayish_magenta" # Hex: #d7afd7
  [183]=":mauve" # Hex: #d7afff
  [184]=":citrine" # Hex: #d7d700
  [185]=":chinese_green" # Hex: #d7d75f
  [186]=":deco" # Hex: #d7d787
  [187]=":grayish_yellow" # Hex: #d7d7af
  [188]=":light_silver" # Hex: #d7d7d7
  [189]=":fog" # Hex: #d7d7ff
  [190]=":chartreuse_yellow" # Hex: #d7ff00
  [191]=":canary" # Hex: #d7ff5f
  [192]=":honeysuckle" # Hex: #d7ff87
  [193]=":pale_green" # Hex: #d7ffaf
  [194]=":beige" # Hex: #d7ffd7
  [195]=":light_cyan" # Hex: #d7ffff
  [196]=":light_red" # Hex: #ff0000
  [197]=":vivid_raspberry" # Hex: #ff005f
  [198]=":bright_pink" # Hex: #ff0087
  [199]=":fashion_fuchsia" # Hex: #ff00af
  [200]=":pure_magenta" # Hex: #ff00d7
  [201]=":fuchsia" # Hex: #ff00ff
  [202]=":blaze_orange" # Hex: #ff5f00
  [203]=":bittersweet" # Hex: #ff5f5f
  [204]=":strawberry" # Hex: #ff5f87
  [205]=":hot_pink" # Hex: #ff5faf
  [206]=":light_deep_pink" # Hex: #ff5fd7
  [207]=":pink_flamingo" # Hex: #ff5fff
  [208]=":american_orange" # Hex: #ff8700
  [209]=":coral" # Hex: #ff875f
  [210]=":tulip" # Hex: #ff8787
  [211]=":pink_salmon" # Hex: #ff87af
  [212]=":lavender_rose" # Hex: #ff87d7
  [213]=":blush_pink" # Hex: #ff87ff
  [214]=":chinese_yellow" # Hex: #ffaf00
  [215]=":light_orange" # Hex: #ffaf5f
  [216]=":hit_pink" # Hex: #ffaf87
  [217]=":melon" # Hex: #ffafaf
  [218]=":cotton_candy" # Hex: #ffafd7
  [219]=":pale_magenta" # Hex: #ffafff
  [220]=":gold" # Hex: #ffd700
  [221]=":dandelion" # Hex: #ffd75f
  [222]=":grandis" # Hex: #ffd787
  [223]=":caramel" # Hex: #ffd7af
  [224]=":cosmos" # Hex: #ffd7d7
  [225]=":bubble_gum" # Hex: #ffd7ff
  [226]=":light_yellow_011" # Hex: #ffff00
  [227]=":laser_lemon" # Hex: #ffff5f
  [228]=":dolly" # Hex: #ffff87
  [229]=":calamansi" # Hex: #ffffaf
  [230]=":cream" # Hex: #ffffd7
  [231]=":light_white" # Hex: #ffffff
  [232]=":vampire_black" # Hex: #080808
  [233]=":chinese_black" # Hex: #121212
  [234]=":eerie_black" # Hex: #1c1c1c
  [235]=":raisin_black" # Hex: #262626
  [236]=":dark_charcoal" # Hex: #303030
  [237]=":black_olive" # Hex: #3a3a3a
  [238]=":outer_space" # Hex: #444444
  [239]=":dark_liver" # Hex: #4e4e4e
  [240]=":davys_grey" # Hex: #585858
  [241]=":granite_gray" # Hex: #626262
  [242]=":dim_gray" # Hex: #6c6c6c
  [243]=":boulder" # Hex: #767676
  [244]=":gray" # Hex: #808080
  [245]=":philippine_gray" # Hex: #8a8a8a
  [246]=":dusty_gray" # Hex: #949494
  [247]=":spanish_gray" # Hex: #9e9e9e
  [248]=":dark_gray" # Hex: #a8a8a8
  [249]=":philippine_silver" # Hex: #b2b2b2
  [250]=":silver" # Hex: #bcbcbc
  [251]=":silver_sand" # Hex: #c6c6c6
  [252]=":american_silver" # Hex: #d0d0d0
  [253]=":alto" # Hex: #dadada
  [254]=":mercury" # Hex: #e4e4e4
  [255]=":bright_gray" # Hex: #eeeeee 
)

## Run: get256ColorIndexByName "blue"
get256ColorIndexByName() {
    local color_name="$1"

    for i in "${!colors256[@]}"; do
        if [[ "${colors256[$i]}" == "$color_name" ]]; then
            echo "$i"
            return 0 # OK
        fi
    done
    echo "0"
    return 2 # error
}

## Run: get256ColorNameByIndex "123"
get256ColorNameByIndex() {
    local code="$1"

    # Controlla se il valore è vuoto
    if [[ -z "${colors256[$code]}" ]]; then
        echo ""
        return 2 # error
    fi
    
    echo "${colors256[$code]}"
    return 0
}

## Run: getAnsiColorIndexByName "blue"
getAnsiColorIndexByName() {
    local color_name="$1"
    for i in "${!ansiColors[@]}"; do
        if [[ "${ansiColors[$i]}" == "$color_name" ]]; then
            echo "$i"
            return 0 # OK
        fi
    done
    echo "0"
    return 2 # error
}

## Run: getAnsiColorNameByIndex "123"
getAnsiColorNameByIndex() {
    local code="$1"

    # Controlla se il valore è vuoto
    if [[ -z "${ansiColors[$code]}" ]]; then
        echo ""
        return 2 # error
    fi
    
    echo "${ansiColors[$code]}"
    return 0
}

## Run: getFormattingCodeByName "bold"
getFormattingCodeByName() {
    local formatting_name="$1"
    for i in "${!formatting[@]}"; do
        if [[ "${formatting[$i]}" == "$formatting_name" ]]; then
            echo "$i"
            return 0 # OK
        fi
    done
    echo "0"
    return 2 # error
}

# Get the formatting code by more names
## Run: getFormattingCodeByNames "bold" "dim" "blink"
getFormattingCodeByNames() {
    local formatting_names=("$@")
    local formatting_codes=""

    for paramName in "${formatting_names[@]}"; do
        local param_code
        param_code="$(getFormattingCodeByName "$paramName")"
        if [[ -n "${param_code}" ]]; then

            # split elements by ";"
            if [[ -n "${formatting_codes}" ]]; then
                formatting_codes+=";"
            fi

            # adds element after ";"
            formatting_codes+="${param_code}"
        fi
    done

    echo "$formatting_codes"
}

# Apply a style by code
## Run applyStyleByCodes "255:255;255" "255:255;255" "1" 
applyStyleByCodes() {
    # If $NO_COLOR not defined or empty
    if [[ ! -v "NO_COLOR" || -z "$NO_COLOR" ]]; then
        # Parametri
        local foreground_code="$1"
        local background_code="$2"
        local formatting_codes="$3"

        local foreground_command=""
        local background_command=""

        if [[ "$TERM" == *"truecolor"* || "$TERM" == *"24bit"* ]]; then
            # True Color (24 bit) - No color names
            foreground_command="38;2;${foreground_code}m" # 38;2;r;g;b
            background_command="48;2;${background_code}m" # 48;2;r;g;b
            echo -ne "\033[${foreground_command}\033[${background_command}\033[${formatting_codes}m"
        elif [[ "$TERM" == *"256color"* ]]; then
            # ANSI 256 colors
            if [[ $foreground_code == *";"* ]]; then
                foreground_command="38;2;${foreground_code}m" # 38;2;r;g;b
            else
                foreground_command="38;5;${foreground_code}m" # 38;5;n (index n in a 256-colour palette)
            fi
            if [[ $foreground_code == *";"* ]]; then
                background_command="48;2;${background_code}m" # 48;2;r;g;b
            else
                background_command="48;5;${background_code}m" # 48;5;n (index n in a 256-colour palette)
            fi
            echo -ne "\033[${foreground_command}\033[${background_command}\033[${formatting_codes}m"
        elif [[ "$TERM" == *"color"* ]]; then
            # ANSI 8 colors
            foreground_command="${foreground_code}m" # 30m ... 37m - 90m ... 97m
            background_command="${background_code}m" # 40m ... 47m - 100m ... 107m
            echo -ne "\033[${foreground_command}\033[${background_command}\033[${formatting_codes}m"
        else
            :  # No color ( : is no operation in Bash)
        fi
    fi
}

# Reset color styles
resetStyle() {
    # If $NO_COLOR not defined or empty
    if [[ ! -v "NO_COLOR" || -z "$NO_COLOR" ]]; then
        echo -ne "\033[0m"
    fi
}

# Apply a style by style name
## Run: applyStyleByName "sea green" "vivid light magenta" "bold" "dim" "blink"
applyStyleByName() {
    # If $NO_COLOR not defined or empty
    if [[ ! -v "NO_COLOR" || -z "$NO_COLOR" ]]; then
        # colors
        local foreground_name="$1"
        local background_name="$2"

        # Remove $1 and $2
        shift 2

        # formatting styles
        local formatting_names=("$@")
        local formatting_codes
        formatting_codes=$(getFormattingCodeByNames "${formatting_names[@]}")

        local foreground_command=""
        local background_command=""

        if [[ "$TERM" == *"truecolor"* || "$TERM" == *"24bit"* ]]; then
            :  # True Color (24 bit)
            # No color names for True Color
        elif [[ "$TERM" == *"256color"* ]]; then
            # ANSI 256 colors
            # No color names for the format 38;2;r;g;b
            # color names only for the format 38;5;n
            local foreground_code
            local background_code
            foreground_code="$(get256ColorIndexByName "$foreground_name")"
            background_code="$(get256ColorIndexByName "$background_name")"
            foreground_command="38;5;${background_code}m"
            background_command="48;5;${background_code}m" # 48;5;n (index n in a 256-colour palette)
            echo -ne "\033[${foreground_command}\033[${background_command}\033[${formatting_codes}m"
        elif [[ "$TERM" == *"color"* ]]; then
            # ANSI 8 colors
            local foreground_code
            local background_code
            foreground_code="$(getAnsiColorIndexByName "$foreground_name")"
            background_code="$(getAnsiColorIndexByName "$background_name")"
            foreground_command="${foreground_code}m" # 30m ... 37m - 90m ... 97m
            background_command="${background_code}m" # 40m ... 47m - 100m ... 107m
            echo -ne "\033[${foreground_command}\033[${background_command}\033[${formatting_codes}m"
        else
            :  # No color ( : is no operation in Bash)
        fi
    fi
}

: ' multiline comment

applyStyleByCodes "202" "122" "1" 
echo -n " RGB text "
resetStyle
echo ""

applyStyleByName ":earth_yellow" ":aquamarine_087" "bold" "dim" 
echo -ne " :earth_yellow - :aquamarine_087 - bold dim "
resetStyle
echo ""

TERM="xterm-color"

applyStyleByCodes "30" "46" "1" "2" 
echo -n " ANSI black - background cyan - bold"
resetStyle
echo ""

applyStyleByName "green" "background cyan" "bold" "dim" 
echo -ne " ANSI green - background cyan - bold dim "
resetStyle
echo ""


applyStyleByName "bright green" "bright background cyan" "bold" "dim" 
echo -ne " ANSI bright green - bright background cyan - bold dim "
resetStyle
echo ""

TERM="xterm-256color"

'