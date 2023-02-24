terraform {
  required_providers {
    azurerm = {
      source  = "hashicorp/azurerm"
      version = "=3.0.0"
    }
  }
  backend "azurerm" {
    resource_group_name  = "game-app"
    storage_account_name = "mfegameappstorage"
    container_name       = "tfstate"
    key                  = "terraform.tfstate"
  }

}

provider "azurerm" {
  features {}
}

resource "azurerm_resource_group" "rg" {
  name = "game-app"
  location = "West Europe"
}

resource "azurerm_storage_account" "mfegameappstorage" {
  account_tier             = "Standard"
  account_replication_type = "LRS"
  location                 = azurerm_resource_group.rg.location
  name                     = "mfegameappstorage"
  resource_group_name      = azurerm_resource_group.rg.name
}


resource "azurerm_storage_container" "azurerm_storage_container" {
  name = "tfstate"
  storage_account_name = azurerm_storage_account.mfegameappstorage.name
}


resource "azurerm_static_site" "portal" {
  name                = "portal"
  resource_group_name = azurerm_resource_group.rg.name
  location            = azurerm_resource_group.rg.location
}


resource "azurerm_static_site" "snake" {
  name                = "snake"
  resource_group_name = azurerm_resource_group.rg.name
  location            = azurerm_resource_group.rg.location
}
