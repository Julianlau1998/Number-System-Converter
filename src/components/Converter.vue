<template>
  <div class="wrapper">
      <!-- <div id="blocker"></div> -->
      <form class="form" autocomplete=off>
          <h3 for="dec" class="label">
              <span
                class="inputLabel"
                v-if="dec!==null && dec!==''"
              >
                  Decimal
              </span>
              <br>
              <input
                type="tel"
                placeholder="Dec" 
                id="dec"
                v-model="dec"
                @keydown="base = 10"
                ref="dec"
                value=""
                autocomplete="off"
                maxlength="15"
              />
              <br>
              <span 
                v-if="errorDec"
                class="error"
              >
                Not a valid decimal value
              </span>
            </h3>
          <h3>
              <span
                class="inputLabel"
                v-if="bin!==null && bin!==''"
              >
                  Binary
              </span>
              <br>
               <input
                type="tel"
                placeholder="Bin"
                v-model="bin"
                @keydown="base = 2"
                ref="bin"
                id=bin
                maxlength="40"
                autocomplete="off"
              />
              <br>
              <span 
                v-if="errorBin"
                class="error"
              >
                Not a valid binary value
              </span>
          </h3>
          <h3>
              <span
                class="inputLabel"
                v-if="hex!==null && hex!==''"
              >
                  Hexadecimal
              </span>  
              <br>
              <input
                type="text"
                placeholder="Hex" 
                @input="addToHex($event.data)"
                ref="hex"
                id="hex"
                autocomplete="off"
                maxlength="13"
              />
              <br>
              <span 
                v-if="errorHex"
                class="error"
              >
                Not a valid hexadecimal value
              </span>
          </h3>
          <h3>
              <span
                class="inputLabel"
                v-if="oct!==null && oct!==''"
              >
                  Octal
              </span>
              <br>
              <input
                type="tel"
                placeholder="Oct"
                v-model="oct"
                @keydown="base = 8"
                ref="oct"
                id="oct"
                maxlength="17"
                autocomplete="off"
              />
              <br>
              <span 
                v-if="errorOct"
                class="error"
              >
                Not a valid Octal value
              </span>
          </h3>
        <select 
            name="baseSelect"
            id="baseSelect"
            class="select"
            ref="selectedBase"
            v-model="selectedBase"
        >
            <option 
                value="" 
                disabled selected
            >
                Base
            </option>
            <option
                v-for="(base, index) in bases"
                :key="index"
                :value="base"
            >
                {{base}}
            </option>
        </select>
        <input
            type="text"
            class="smallInput"
            placeholder="Value" 
            v-model="selected"
            @keydown="base=''" 
            @click="intoView()"
            ref="base"
            autocomplete="off"
        />
         <span 
            v-if="errorBase"
            class="errorBase"
          >
                Not a valid value
          </span>
        <br>
        <button
            v-if="this.iosApp"
            type="button"
            class="button is-support-button"
            id="support"
            @click="support"
        >
          Watch Ad To Support The Developer
        </button>
      </form>
  </div>
</template>

<script>
export default {
    name: 'converter',
    data () {
        return {
            dec: null,
            bin: null,
            hex: '',
            oct: null,
            selected: null,
            base: null,
            selectedBase: 10,
            bases: [],
            notSelected: true,
            errorHex: false,
            errorDec: false,
            errorBin: false,
            errorOct: false,
            errorBase: false
        }
    },
    created () {
        this.bases = [...Array(37).keys()]
        this.bases = this.bases.filter(el => el != 0 && el!= 1)
        this.$store.state.componentTransition = 'swipe-component-left'
    },
    mounted () {
    },
    computed: {
      iosApp () {
        return window.webkit
      }
    },
    watch: {
        dec(val) {
            if(this.base===10) {
                this.convert(val, 10)
            }
        },
        bin(val) {
            if(this.base===2) {
                this.convert(val, 2)
            }
        },
        hex(val) {
            this.$refs.hex.value = val
            if(this.base===16) {
                this.convert(val, 16)
            }
        },
        oct(val) {
            if(this.base===8) {
                this.convert(val, 8)
            }
        },
        selected(val) {
            // if (isNaN(parseInt(val, 16))) {
            //     val=''
            // }

            if (
                this.base !== 2 &&
                this.base !== 8 &&
                this.base !== 10 &&
                this.base !== 16
            ) {
                this.notSelected = false
                this.selectedBase = this.$refs.selectedBase.value
                if(this.selectedBase!=='') {
                    this.convert(val, this.selectedBase)
                } 
                if (this.selectedBase === '') {
                    this.selectedBase = 10
                    this.convert(val, this.selectedBase)
                }
            }
        },
        selectedBase (val) {
            if (this.selected !== null && this.selected!=='') {
                this.selected = parseInt(this.dec).toString(val)
            }
        }
    },
    methods: {
        addToHex () {
            if (this.$refs.hex.value !== '') {
                this.hex = this.$refs.hex.value
            } else if (this.hex.length) {
                this.hex = ''
            }
            this.convert(this.hex, 16)
        },
            convert (val, base) {
                if(val!=='') {
                    if (isNaN(parseInt(val, base))) {
                        val=''
                        switch (base) {
                            case 2:
                                this.errorBin = true
                                this.errorOct = false
                                this.errorDec = false
                                this.errorHex = false
                                break
                            case 8:
                                this.errorBin = false
                                this.errorOct = true
                                this.errorDec = false
                                this.errorHex = false
                                break
                            case 10:
                                this.errorDec = true
                                this.errorBin = false
                                this.errorOct = false
                                this.errorHex = false
                                this.dec = ''
                                break
                            case 16:
                                this.errorHex = true
                                this.errorBin = false
                                this.errorDec = false
                                this.errorOct = false
                                break
                        }
                    }
                }
                if (base === 10) {
                    if (val !== '') {
                        if (this.notSelected === true) {
                            this.selectedBase = this.$refs.selectedBase.value
                        }
                        val = parseInt(val)
                        this.bin = val.toString(2)
                        this.hex = val.toString(16)
                        this.oct = val.toString(8)
                        this.dec = val.toString(10)
                        this.selected = val.toString(parseInt(this.selectedBase))
                        this.errorBin = false
                        this.errorOct = false
                        this.errorDec = false
                        this.errorHex = false
                    } else {
                        this.bin = ''
                        this.hex = ''
                        this.oct = ''
                        this.selected = ''
                    }
                } else {
                    if (val !== '') {
                        this.errorBin = false
                        this.errorOct = false
                        this.errorDec = false
                        this.errorHex = false

                        this.dec = parseInt(val, base)
                        this.bin = this.dec.toString(2)
                        this.oct = this.dec.toString(8)
                        this.hex = this.dec.toString(16)
                        this.selected = this.dec.toString(this.selectedBase)
                    } else {
                        this.bin = ''
                        this.dec = ''
                        this.oct = ''
                        this.hex = ''
                        this.selected = ''
                    }
                }
            },
            intoView () {
                // setTimeout(() => {
                //     this.$refs.base.scrollIntoView()
                // }, 200)
            },
            support () {
              if (this.iosApp && window.webkit.messageHandlers.toggleMessageHandler) {
                window.webkit.messageHandlers.toggleMessageHandler.postMessage({
                  "message": 'Trigger reward-ad:'
                });
              }
            }
    }
}
</script>

<style scoped>
    .wrapper {
        width: 99.9vw;
        height: 120vh;
        background-color: #1a1c1e;
        border-top-right-radius: 33px;
        border-top-left-radius: 33px;
        margin-top: 4.5rem;
        z-index: 10;
    }
    .form {
        margin-top: 4rem;
        position: absolute;
        left: 50%;
        transform: translate(-50%, 0%);
        background-color: transparent;
        z-index: 10;
        padding-bottom: 10rem;
        width: 25rem;
        margin-bottom: -4rem;
        height: 19rem;
        border-radius: 20px;
    }
    input, 
    .select {
        height: 2.8rem;
        margin: 0rem 1rem 0rem 1rem;
        border-radius: 4rem;
        background: transparent;
        border: 3px solid #cbe5ff;
        color: lightgray;
        outline: none;
    }
    .select {
        width: 5rem;
        padding-left: 0.5rem;
        padding-top: 0.2rem;
        font-size: 1.1rem;
        color: lightgray;
    }
    .smallInput {
        width: 8rem;
        margin: 0.3rem;
        color: #8ff3f3;
    }
    input {
        width: 18rem;
        font-size: 1.5rem;
        padding: 0 1.2rem 0 1.2rem;
        color: #8ff3f3;
    }
    input:focus {
        border: 2px solid #eedcff;
    }

    /*  Remove Arrows on inputs with type number */
    /* Chrome, Safari, Edge, Opera */
    input::-webkit-outer-spin-button,
    input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
    }
    /* Firefox */
    input[type=number] {
    -moz-appearance: textfield;
    }
    .inputLabel {
        /* color: red;
        padding: 10rem;
        margin-bottom: -1rem; */
        padding-left: 10rem;
        color: lightgray;
        opacity: 0.7;
        position: relative;
        top: -0.1rem;
        left: -6.6rem;
        float: left;
    }
    #oct {
        margin-bottom: 0.5rem;
    }
    .error {
        color: #dc2727;
        margin-left: 0rem;
        margin-bottom: 0rem;
    }
    #blocker {
        width: 100%;
        height: 100vh;
        background-color: transparent;
        position: absolute;
        left: 0;
        top: 0;
        z-index: 10;
    }

    .is-support-button {
      margin-top: 3rem;
      background-color: transparent;
      border: 2px solid #cbe5ff;
      border-radius: 20px;
      color: #cbe5ff;
      padding: 10px;
      width: 10rem;
      cursor: pointer;
    }

    .is-support-button:hover {
      background-color: #cbe5ff;
      color: black;
    }

    @media (max-width: 350px) {
        .form {
            margin-top: 3.5rem !important;
            height: 13rem;
        }
        input {
            height: 2.8rem;
            margin: -0.5rem 1rem -0.5rem 1rem;
        }
        #blocker {
            height: 27.8rem;
            background-color: black;
        }
    }

    @media (max-width: 740px) {
        .form {
            margin-top: 1.5rem;
        }
    }
    @media (max-width: 410px) {
        input {
            width: 18rem;
        }
        .smallInput {
            width: 7rem;
        }
        .form {
            width: 24rem;
        }
    }
    @media (max-width: 371px) {
        input {
            width: 12rem;
        }
        .smallInput {
            width: 5rem;
        }
        .form {
            width: 18rem;
        }
    }
    @media (max-width: 300px) {
        input {
            width: 10rem;
        }
        .smallInput {
            width: 4rem;
        }
        .form {
            width: 17rem;
        }
    }
</style>