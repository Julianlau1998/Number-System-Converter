<template>
  <div class="wrapper">
      <form class="form">
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
                autofocus
                maxlength="15"
              />
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
              />
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
                v-model="hex"
                @keydown="base = 16"
                ref="hex"
                id="hex"
                autocomplete="off"
                maxlength="13"
              />
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
              />
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
        />
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
            hex: null,
            oct: null,
            selected: null,
            base: null,
            selectedBase: 10,
            bases: [],
            notSelected: true,
            errorHex: false
        }
    },
    created () {
        this.bases = [...Array(37).keys()]
        this.bases = this.bases.filter(el => el != 0 && el!= 1)
        console.log(this.bases)
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
            if (isNaN(parseInt(val, 16))) {
                val=0
            }
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
                                break
                            case 16:
                                this.errorHex = true
                                this.errorBin = false
                                this.errorDec = false
                                this.errorOct = false
                        }
                    } else {
                        this.errorHex = false
                        this.errorOct = false
                        this.errorDec = false
                        this.errorBin = false
                    }
                }
                if (base === 10) {
                    if (val !== '') {
                        if (this.notSelected === true) {
                            this.selectedBase = this.$refs.selectedBase.value
                        }
                        this.errorHex = false
                        val = parseInt(val)
                        this.bin = val.toString(2)
                        this.hex = val.toString(16)
                        this.oct = val.toString(8)
                        this.dec = val.toString(10)
                        this.selected = val.toString(parseInt(this.selectedBase))
                    } else {
                        this.bin = ''
                        this.hex = ''
                        this.oct = ''
                        this.selected = ''
                    }
                } else {
                    if (val !== '') {
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
                setTimeout(() => {
                    this.$refs.base.scrollIntoView()
                }, 200)
            }
    }
}
</script>

<style scoped>
    .form {
        margin-top: 7rem;
        text-align: left;
        position: absolute;
        left: 50%;
        transform: translate(-50%, 0%);
    }
    input, 
    .select {
        height: 2.8rem;
        margin: 0rem 1rem 0rem 1rem;
        border-radius: 4rem;
        background: transparent;
        border: 2px solid #00D3D3;
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
        color: #ff0000;
    }
    input {
        width: 18rem;
        font-size: 1.5rem;
        padding: 0 1.2rem 0 1.2rem;
        color: #ff0000;
    }
    input:focus {
        border: 2px solid #EDCF32;
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
        left: -7.5rem;
    }
    #oct {
        margin-bottom: 0.5rem;
    }
    .error {
        color: red;
        margin-left: 2.5rem;
        margin-bottom: -10rem;
    }

    @media (max-width: 740px) {
        .form {
            margin-top: 5.5rem;
        }
    }
    @media (max-width: 371px) {
        input {
            width: 12rem;
        }
        .smallInput {
            width: 5rem;
        }
    }
</style>